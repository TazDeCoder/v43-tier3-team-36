import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestCreateManyTradeOfferInputSchema } from './TradeRequestCreateManyTradeOfferInputSchema';

export const TradeRequestCreateManyTradeOfferInputEnvelopeSchema: z.ZodType<Prisma.TradeRequestCreateManyTradeOfferInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TradeRequestCreateManyTradeOfferInputSchema),
        z.lazy(() => TradeRequestCreateManyTradeOfferInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default TradeRequestCreateManyTradeOfferInputEnvelopeSchema;
