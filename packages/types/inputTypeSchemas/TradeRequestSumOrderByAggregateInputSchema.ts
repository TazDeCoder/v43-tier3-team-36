import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TradeRequestSumOrderByAggregateInputSchema: z.ZodType<Prisma.TradeRequestSumOrderByAggregateInput> =
  z
    .object({
      receiverComicId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default TradeRequestSumOrderByAggregateInputSchema;
