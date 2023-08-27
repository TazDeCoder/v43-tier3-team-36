import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const TradeRequestMinOrderByAggregateInputSchema: z.ZodType<Prisma.TradeRequestMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      receiverId: z.lazy(() => SortOrderSchema).optional(),
      tradeOfferId: z.lazy(() => SortOrderSchema).optional(),
      receiverComicId: z.lazy(() => SortOrderSchema).optional(),
      status: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default TradeRequestMinOrderByAggregateInputSchema;
