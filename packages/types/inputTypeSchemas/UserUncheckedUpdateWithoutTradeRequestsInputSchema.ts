import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CollectionItemUncheckedUpdateManyWithoutUserNestedInputSchema } from './CollectionItemUncheckedUpdateManyWithoutUserNestedInputSchema';
import { TradeOfferUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './TradeOfferUncheckedUpdateManyWithoutCreatedByNestedInputSchema';
import { PushNotificationUncheckedUpdateManyWithoutUserNestedInputSchema } from './PushNotificationUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateWithoutTradeRequestsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTradeRequestsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      city: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      country: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      bannerImage: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      collection: z
        .lazy(
          () => CollectionItemUncheckedUpdateManyWithoutUserNestedInputSchema,
        )
        .optional(),
      tradeOffers: z
        .lazy(
          () => TradeOfferUncheckedUpdateManyWithoutCreatedByNestedInputSchema,
        )
        .optional(),
      pushNotification: z
        .lazy(
          () => PushNotificationUncheckedUpdateManyWithoutUserNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export default UserUncheckedUpdateWithoutTradeRequestsInputSchema;
