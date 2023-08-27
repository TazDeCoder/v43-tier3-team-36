import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferCreateManyCreatedByInputSchema } from './TradeOfferCreateManyCreatedByInputSchema';

export const TradeOfferCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.TradeOfferCreateManyCreatedByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TradeOfferCreateManyCreatedByInputSchema),
        z.lazy(() => TradeOfferCreateManyCreatedByInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default TradeOfferCreateManyCreatedByInputEnvelopeSchema;
