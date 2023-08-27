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
import { CollectionItemUncheckedUpdateManyWithoutTradeOfferNestedInputSchema } from './CollectionItemUncheckedUpdateManyWithoutTradeOfferNestedInputSchema';
import { TradeRequestUncheckedUpdateManyWithoutTradeOfferNestedInputSchema } from './TradeRequestUncheckedUpdateManyWithoutTradeOfferNestedInputSchema';

export const TradeOfferUncheckedUpdateWithoutCreatedByInputSchema: z.ZodType<Prisma.TradeOfferUncheckedUpdateWithoutCreatedByInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
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
          z.number(),
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
      collection: z
        .lazy(
          () =>
            CollectionItemUncheckedUpdateManyWithoutTradeOfferNestedInputSchema,
        )
        .optional(),
      TradeRequests: z
        .lazy(
          () =>
            TradeRequestUncheckedUpdateManyWithoutTradeOfferNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export default TradeOfferUncheckedUpdateWithoutCreatedByInputSchema;
