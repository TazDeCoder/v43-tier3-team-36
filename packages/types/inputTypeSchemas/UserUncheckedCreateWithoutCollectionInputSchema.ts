import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './TradeOfferUncheckedCreateNestedManyWithoutCreatedByInputSchema';
import { TradeRequestUncheckedCreateNestedManyWithoutReceiverInputSchema } from './TradeRequestUncheckedCreateNestedManyWithoutReceiverInputSchema';
import { PushNotificationUncheckedCreateNestedManyWithoutUserInputSchema } from './PushNotificationUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutCollectionInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCollectionInput> =
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
      tradeOffers: z
        .lazy(
          () => TradeOfferUncheckedCreateNestedManyWithoutCreatedByInputSchema,
        )
        .optional(),
      TradeRequests: z
        .lazy(
          () => TradeRequestUncheckedCreateNestedManyWithoutReceiverInputSchema,
        )
        .optional(),
      pushNotification: z
        .lazy(
          () => PushNotificationUncheckedCreateNestedManyWithoutUserInputSchema,
        )
        .optional(),
    })
    .strict();

export default UserUncheckedCreateWithoutCollectionInputSchema;
