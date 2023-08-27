import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TradeRequestAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TradeRequestAvgOrderByAggregateInput> =
  z
    .object({
      receiverComicId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default TradeRequestAvgOrderByAggregateInputSchema;
