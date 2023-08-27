import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferCreateNestedManyWithoutCreatedByInputSchema } from './TradeOfferCreateNestedManyWithoutCreatedByInputSchema';
import { TradeRequestCreateNestedManyWithoutReceiverInputSchema } from './TradeRequestCreateNestedManyWithoutReceiverInputSchema';
import { PushNotificationCreateNestedManyWithoutUserInputSchema } from './PushNotificationCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutCollectionInputSchema: z.ZodType<Prisma.UserCreateWithoutCollectionInput> =
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
        .lazy(() => TradeOfferCreateNestedManyWithoutCreatedByInputSchema)
        .optional(),
      TradeRequests: z
        .lazy(() => TradeRequestCreateNestedManyWithoutReceiverInputSchema)
        .optional(),
      pushNotification: z
        .lazy(() => PushNotificationCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export default UserCreateWithoutCollectionInputSchema;
