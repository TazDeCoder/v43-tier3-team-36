import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const CollectionItemSumOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionItemSumOrderByAggregateInput> =
  z
    .object({
      comicId: z.lazy(() => SortOrderSchema).optional(),
      issueNumber: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default CollectionItemSumOrderByAggregateInputSchema;
