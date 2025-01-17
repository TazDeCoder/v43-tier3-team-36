import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TradeRequestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TradeRequestOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default TradeRequestOrderByRelationAggregateInputSchema;
