import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';
import { UserCreateNestedOneWithoutTradeRequestsInputSchema } from './UserCreateNestedOneWithoutTradeRequestsInputSchema';

export const TradeRequestCreateWithoutTradeOfferInputSchema: z.ZodType<Prisma.TradeRequestCreateWithoutTradeOfferInput> =
  z
    .object({
      id: z.string().optional(),
      receiverComicId: z.number().optional().nullable(),
      status: z.lazy(() => TradeRequestStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
      receiver: z.lazy(
        () => UserCreateNestedOneWithoutTradeRequestsInputSchema,
      ),
    })
    .strict();

export default TradeRequestCreateWithoutTradeOfferInputSchema;
