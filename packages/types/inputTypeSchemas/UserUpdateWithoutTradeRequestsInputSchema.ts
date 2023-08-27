import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CollectionItemUpdateManyWithoutUserNestedInputSchema } from './CollectionItemUpdateManyWithoutUserNestedInputSchema';
import { TradeOfferUpdateManyWithoutCreatedByNestedInputSchema } from './TradeOfferUpdateManyWithoutCreatedByNestedInputSchema';
import { PushNotificationUpdateManyWithoutUserNestedInputSchema } from './PushNotificationUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutTradeRequestsInputSchema: z.ZodType<Prisma.UserUpdateWithoutTradeRequestsInput> =
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
        .lazy(() => CollectionItemUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      tradeOffers: z
        .lazy(() => TradeOfferUpdateManyWithoutCreatedByNestedInputSchema)
        .optional(),
      pushNotification: z
        .lazy(() => PushNotificationUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export default UserUpdateWithoutTradeRequestsInputSchema;
