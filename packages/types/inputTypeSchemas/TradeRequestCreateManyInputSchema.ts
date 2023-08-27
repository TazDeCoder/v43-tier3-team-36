import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';

export const TradeRequestCreateManyInputSchema: z.ZodType<Prisma.TradeRequestCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      receiverId: z.string(),
      tradeOfferId: z.string(),
      receiverComicId: z.number().int().optional().nullable(),
      status: z.lazy(() => TradeRequestStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export default TradeRequestCreateManyInputSchema;
