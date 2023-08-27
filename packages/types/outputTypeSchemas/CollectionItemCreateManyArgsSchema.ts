import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemCreateManyInputSchema } from '../inputTypeSchemas/CollectionItemCreateManyInputSchema';

export const CollectionItemCreateManyArgsSchema: z.ZodType<Prisma.CollectionItemCreateManyArgs> =
  z
    .object({
      data: z.union([
        CollectionItemCreateManyInputSchema,
        CollectionItemCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default CollectionItemCreateManyArgsSchema;
