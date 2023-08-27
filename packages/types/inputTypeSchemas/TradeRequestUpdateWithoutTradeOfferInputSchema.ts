import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';
import { EnumTradeRequestStatusFieldUpdateOperationsInputSchema } from './EnumTradeRequestStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutTradeRequestsNestedInputSchema } from './UserUpdateOneRequiredWithoutTradeRequestsNestedInputSchema';

export const TradeRequestUpdateWithoutTradeOfferInputSchema: z.ZodType<Prisma.TradeRequestUpdateWithoutTradeOfferInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      receiverComicId: z
        .union([
          z.number(),
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
    })
    .strict();

export default TradeRequestUpdateWithoutTradeOfferInputSchema;
