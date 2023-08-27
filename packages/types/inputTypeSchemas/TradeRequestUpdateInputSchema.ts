import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';
import { EnumTradeRequestStatusFieldUpdateOperationsInputSchema } from './EnumTradeRequestStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutTradeRequestsNestedInputSchema } from './UserUpdateOneRequiredWithoutTradeRequestsNestedInputSchema';
import { TradeOfferUpdateOneRequiredWithoutTradeRequestsNestedInputSchema } from './TradeOfferUpdateOneRequiredWithoutTradeRequestsNestedInputSchema';

export const TradeRequestUpdateInputSchema: z.ZodType<Prisma.TradeRequestUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      receiverComicId: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      status: z
        .union([
          z.lazy(() => TradeRequestStatusSchema),
          z.lazy(() => EnumTradeRequestStatusFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      receiver: z
        .lazy(() => UserUpdateOneRequiredWithoutTradeRequestsNestedInputSchema)
        .optional(),
      TradeOffer: z
        .lazy(
          () =>
            TradeOfferUpdateOneRequiredWithoutTradeRequestsNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export default TradeRequestUpdateInputSchema;
