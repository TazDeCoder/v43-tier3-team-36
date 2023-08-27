import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereInputSchema } from './TradeOfferWhereInputSchema';

export const TradeOfferListRelationFilterSchema: z.ZodType<Prisma.TradeOfferListRelationFilter> =
  z
    .object({
      every: z.lazy(() => TradeOfferWhereInputSchema).optional(),
      some: z.lazy(() => TradeOfferWhereInputSchema).optional(),
      none: z.lazy(() => TradeOfferWhereInputSchema).optional(),
    })
    .strict();

export default TradeOfferListRelationFilterSchema;
