import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const CollectionItemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CollectionItemAvgOrderByAggregateInput> =
  z
    .object({
      comicId: z.lazy(() => SortOrderSchema).optional(),
      issueNumber: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default CollectionItemAvgOrderByAggregateInputSchema;
