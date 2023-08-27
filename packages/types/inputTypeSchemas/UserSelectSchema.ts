import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { CollectionItemFindManyArgsSchema } from '../outputTypeSchemas/CollectionItemFindManyArgsSchema';
import { TradeOfferFindManyArgsSchema } from '../outputTypeSchemas/TradeOfferFindManyArgsSchema';
import { TradeRequestFindManyArgsSchema } from '../outputTypeSchemas/TradeRequestFindManyArgsSchema';
import { PushNotificationFindManyArgsSchema } from '../outputTypeSchemas/PushNotificationFindManyArgsSchema';
import { UserCountOutputTypeArgsSchema } from '../outputTypeSchemas/UserCountOutputTypeArgsSchema';

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    username: z.boolean().optional(),
    profileImage: z.boolean().optional(),
    city: z.boolean().optional(),
    country: z.boolean().optional(),
    bannerImage: z.boolean().optional(),
    collection: z
      .union([z.boolean(), z.lazy(() => CollectionItemFindManyArgsSchema)])
      .optional(),
    tradeOffers: z
      .union([z.boolean(), z.lazy(() => TradeOfferFindManyArgsSchema)])
      .optional(),
    TradeRequests: z
      .union([z.boolean(), z.lazy(() => TradeRequestFindManyArgsSchema)])
      .optional(),
    pushNotification: z
      .union([z.boolean(), z.lazy(() => PushNotificationFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default UserSelectSchema;
