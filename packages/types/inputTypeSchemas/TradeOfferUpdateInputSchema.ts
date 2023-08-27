import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';
import { EnumTradeOfferTypeFieldUpdateOperationsInputSchema } from './EnumTradeOfferTypeFieldUpdateOperationsInputSchema';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';
import { EnumTradeOfferStatusFieldUpdateOperationsInputSchema } from './EnumTradeOfferStatusFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutTradeOffersNestedInputSchema } from './UserUpdateOneRequiredWithoutTradeOffersNestedInputSchema';
import { CollectionItemUpdateManyWithoutTradeOfferNestedInputSchema } from './CollectionItemUpdateManyWithoutTradeOfferNestedInputSchema';
import { TradeRequestUpdateManyWithoutTradeOfferNestedInputSchema } from './TradeRequestUpdateManyWithoutTradeOfferNestedInputSchema';

export const TradeOfferUpdateInputSchema: z.ZodType<Prisma.TradeOfferUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.lazy(() => TradeOfferTypeSchema),
          z.lazy(() => EnumTradeOfferTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      status: z
        .union([
          z.lazy(() => TradeOfferStatusSchema),
          z.lazy(() => EnumTradeOfferStatusFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      price: z
        .union([
          z.number(),
          z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      phoneNumber: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      message: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      wantedComicId: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdBy: z
        .lazy(() => UserUpdateOneRequiredWithoutTradeOffersNestedInputSchema)
        .optional(),
      collection: z
        .lazy(() => CollectionItemUpdateManyWithoutTradeOfferNestedInputSchema)
        .optional(),
      TradeRequests: z
        .lazy(() => TradeRequestUpdateManyWithoutTradeOfferNestedInputSchema)
        .optional(),
    })
    .strict();

export default TradeOfferUpdateInputSchema;
