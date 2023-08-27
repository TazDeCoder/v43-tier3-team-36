import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TradeRequestCountOrderByAggregateInputSchema } from './TradeRequestCountOrderByAggregateInputSchema';
import { TradeRequestAvgOrderByAggregateInputSchema } from './TradeRequestAvgOrderByAggregateInputSchema';
import { TradeRequestMaxOrderByAggregateInputSchema } from './TradeRequestMaxOrderByAggregateInputSchema';
import { TradeRequestMinOrderByAggregateInputSchema } from './TradeRequestMinOrderByAggregateInputSchema';
import { TradeRequestSumOrderByAggregateInputSchema } from './TradeRequestSumOrderByAggregateInputSchema';

export const TradeRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.TradeRequestOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      receiverId: z.lazy(() => SortOrderSchema).optional(),
      tradeOfferId: z.lazy(() => SortOrderSchema).optional(),
      receiverComicId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => TradeRequestCountOrderByAggregateInputSchema)
        .optional(),
      _avg: z.lazy(() => TradeRequestAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => TradeRequestMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => TradeRequestMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => TradeRequestSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default TradeRequestOrderByWithAggregationInputSchema;
