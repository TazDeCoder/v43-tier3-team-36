import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';
import { TradeOfferCreateNestedOneWithoutTradeRequestsInputSchema } from './TradeOfferCreateNestedOneWithoutTradeRequestsInputSchema';

export const TradeRequestCreateWithoutReceiverInputSchema: z.ZodType<Prisma.TradeRequestCreateWithoutReceiverInput> =
  z
    .object({
      id: z.string().optional(),
      receiverComicId: z.number().optional().nullable(),
      status: z.lazy(() => TradeRequestStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
      TradeOffer: z.lazy(
        () => TradeOfferCreateNestedOneWithoutTradeRequestsInputSchema,
      ),
    })
    .strict();

export default TradeRequestCreateWithoutReceiverInputSchema;
