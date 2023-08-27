import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const CollectionItemCountOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionItemCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      comicId: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      issueNumber: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      tradeOfferId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default CollectionItemCountOrderByAggregateInputSchema;
