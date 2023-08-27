import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemCreateNestedManyWithoutUserInputSchema } from './CollectionItemCreateNestedManyWithoutUserInputSchema';
import { TradeOfferCreateNestedManyWithoutCreatedByInputSchema } from './TradeOfferCreateNestedManyWithoutCreatedByInputSchema';
import { PushNotificationCreateNestedManyWithoutUserInputSchema } from './PushNotificationCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutTradeRequestsInputSchema: z.ZodType<Prisma.UserCreateWithoutTradeRequestsInput> =
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
        .lazy(() => CollectionItemCreateNestedManyWithoutUserInputSchema)
        .optional(),
      tradeOffers: z
        .lazy(() => TradeOfferCreateNestedManyWithoutCreatedByInputSchema)
        .optional(),
      pushNotification: z
        .lazy(() => PushNotificationCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export default UserCreateWithoutTradeRequestsInputSchema;
