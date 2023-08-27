import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TradeOfferCountOrderByAggregateInputSchema } from './TradeOfferCountOrderByAggregateInputSchema';
import { TradeOfferAvgOrderByAggregateInputSchema } from './TradeOfferAvgOrderByAggregateInputSchema';
import { TradeOfferMaxOrderByAggregateInputSchema } from './TradeOfferMaxOrderByAggregateInputSchema';
import { TradeOfferMinOrderByAggregateInputSchema } from './TradeOfferMinOrderByAggregateInputSchema';
import { TradeOfferSumOrderByAggregateInputSchema } from './TradeOfferSumOrderByAggregateInputSchema';

export const TradeOfferOrderByWithAggregationInputSchema: z.ZodType<Prisma.TradeOfferOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      createdById: z.lazy(() => SortOrderSchema).optional(),
      price: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      phoneNumber: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      message: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      wantedComicId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => TradeOfferCountOrderByAggregateInputSchema)
        .optional(),
      _avg: z.lazy(() => TradeOfferAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => TradeOfferMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => TradeOfferMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => TradeOfferSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default TradeOfferOrderByWithAggregationInputSchema;
