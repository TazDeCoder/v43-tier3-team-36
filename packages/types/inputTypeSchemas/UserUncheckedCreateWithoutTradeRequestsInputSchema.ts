import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemUncheckedCreateNestedManyWithoutUserInputSchema } from './CollectionItemUncheckedCreateNestedManyWithoutUserInputSchema';
import { TradeOfferUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './TradeOfferUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { PushNotificationUncheckedCreateNestedManyWithoutUserInputSchema } from './PushNotificationUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutTradeRequestsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTradeRequestsInput> =
  z
    .object({
      id: z.string().optional(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      password: z.string(),
      username: z.string(),
      profileImage: z.string().optional().nullable(),
      city: z.string(),
      country: z.string(),
      bannerImage: z.string(),
      collection: z
        .lazy(
          () => CollectionItemUncheckedCreateNestedManyWithoutUserInputSchema,
        )
        .optional(),
      tradeOffers: z
        .lazy(
          () => TradeOfferUncheckedCreateNestedManyWithoutCreatedByInputSchema,
        )
        .optional(),
      pushNotification: z
        .lazy(
          () => PushNotificationUncheckedCreateNestedManyWithoutUserInputSchema,
        )
        .optional(),
    })
    .strict();

export default UserUncheckedCreateWithoutTradeRequestsInputSchema;
