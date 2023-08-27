import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';

export const TradeRequestCreateManyTradeOfferInputSchema: z.ZodType<Prisma.TradeRequestCreateManyTradeOfferInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      receiverId: z.string(),
      receiverComicId: z.number().optional().nullable(),
      status: z.lazy(() => TradeRequestStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export default TradeRequestCreateManyTradeOfferInputSchema;
