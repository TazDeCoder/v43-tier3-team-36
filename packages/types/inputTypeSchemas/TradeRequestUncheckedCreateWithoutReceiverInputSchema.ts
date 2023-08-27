import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';

export const TradeRequestUncheckedCreateWithoutReceiverInputSchema: z.ZodType<Prisma.TradeRequestUncheckedCreateWithoutReceiverInput> =
  z
    .object({
      id: z.string().optional(),
      tradeOfferId: z.string(),
      receiverComicId: z.number().optional().nullable(),
      status: z.lazy(() => TradeRequestStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export default TradeRequestUncheckedCreateWithoutReceiverInputSchema;
