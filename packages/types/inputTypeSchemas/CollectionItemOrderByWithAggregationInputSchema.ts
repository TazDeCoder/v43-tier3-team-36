import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CollectionItemCountOrderByAggregateInputSchema } from './CollectionItemCountOrderByAggregateInputSchema';
import { CollectionItemAvgOrderByAggregateInputSchema } from './CollectionItemAvgOrderByAggregateInputSchema';
import { CollectionItemMaxOrderByAggregateInputSchema } from './CollectionItemMaxOrderByAggregateInputSchema';
import { CollectionItemMinOrderByAggregateInputSchema } from './CollectionItemMinOrderByAggregateInputSchema';
import { CollectionItemSumOrderByAggregateInputSchema } from './CollectionItemSumOrderByAggregateInputSchema';

export const CollectionItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.CollectionItemOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      comicId: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      issueNumber: z.lazy(() => SortOrderSchema).optional(),
      userId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      tradeOfferId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      _count: z
        .lazy(() => CollectionItemCountOrderByAggregateInputSchema)
        .optional(),
      _avg: z
        .lazy(() => CollectionItemAvgOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => CollectionItemMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => CollectionItemMinOrderByAggregateInputSchema)
        .optional(),
      _sum: z
        .lazy(() => CollectionItemSumOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export default CollectionItemOrderByWithAggregationInputSchema;
