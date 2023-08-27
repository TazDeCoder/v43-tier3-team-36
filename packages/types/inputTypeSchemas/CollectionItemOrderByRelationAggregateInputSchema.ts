import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const CollectionItemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CollectionItemOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default CollectionItemOrderByRelationAggregateInputSchema;
