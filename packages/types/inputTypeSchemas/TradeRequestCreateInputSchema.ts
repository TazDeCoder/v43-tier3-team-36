import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';
import { UserCreateNestedOneWithoutTradeRequestsInputSchema } from './UserCreateNestedOneWithoutTradeRequestsInputSchema';
import { TradeOfferCreateNestedOneWithoutTradeRequestsInputSchema } from './TradeOfferCreateNestedOneWithoutTradeRequestsInputSchema';

export const TradeRequestCreateInputSchema: z.ZodType<Prisma.TradeRequestCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      receiverComicId: z.number().int().optional().nullable(),
      status: z.lazy(() => TradeRequestStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
      receiver: z.lazy(
        () => UserCreateNestedOneWithoutTradeRequestsInputSchema,
      ),
      TradeOffer: z.lazy(
        () => TradeOfferCreateNestedOneWithoutTradeRequestsInputSchema,
      ),
    })
    .strict();

export default TradeRequestCreateInputSchema;
