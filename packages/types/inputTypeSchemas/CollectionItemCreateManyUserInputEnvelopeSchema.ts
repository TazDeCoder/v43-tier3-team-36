import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemCreateManyUserInputSchema } from './CollectionItemCreateManyUserInputSchema';

export const CollectionItemCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CollectionItemCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => CollectionItemCreateManyUserInputSchema),
        z.lazy(() => CollectionItemCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default CollectionItemCreateManyUserInputEnvelopeSchema;
