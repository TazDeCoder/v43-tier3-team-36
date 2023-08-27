import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereInputSchema } from './TradeOfferWhereInputSchema';

export const TradeOfferRelationFilterSchema: z.ZodType<Prisma.TradeOfferRelationFilter> =
  z
    .object({
      is: z.lazy(() => TradeOfferWhereInputSchema).optional(),
      isNot: z.lazy(() => TradeOfferWhereInputSchema).optional(),
    })
    .strict();

export default TradeOfferRelationFilterSchema;
