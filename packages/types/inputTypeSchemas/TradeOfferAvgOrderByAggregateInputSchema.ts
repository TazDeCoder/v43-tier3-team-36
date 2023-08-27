import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TradeOfferAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TradeOfferAvgOrderByAggregateInput> =
  z
    .object({
      price: z.lazy(() => SortOrderSchema).optional(),
      wantedComicId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default TradeOfferAvgOrderByAggregateInputSchema;
