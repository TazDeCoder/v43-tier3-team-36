import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemCreateManyTradeOfferInputSchema } from './CollectionItemCreateManyTradeOfferInputSchema';

export const CollectionItemCreateManyTradeOfferInputEnvelopeSchema: z.ZodType<Prisma.CollectionItemCreateManyTradeOfferInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => CollectionItemCreateManyTradeOfferInputSchema),
        z.lazy(() => CollectionItemCreateManyTradeOfferInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default CollectionItemCreateManyTradeOfferInputEnvelopeSchema;
