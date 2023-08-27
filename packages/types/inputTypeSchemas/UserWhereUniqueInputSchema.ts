import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { CollectionItemListRelationFilterSchema } from './CollectionItemListRelationFilterSchema';
import { TradeOfferListRelationFilterSchema } from './TradeOfferListRelationFilterSchema';
import { TradeRequestListRelationFilterSchema } from './TradeRequestListRelationFilterSchema';
import { PushNotificationListRelationFilterSchema } from './PushNotificationListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
  z
    .object({
      id: z.string().optional(),
      email: z.string().optional(),
      username: z.string().optional(),
      AND: z
        .union([
          z.lazy(() => UserWhereInputSchema),
          z.lazy(() => UserWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserWhereInputSchema),
          z.lazy(() => UserWhereInputSchema).array(),
        ])
        .optional(),
      firstName: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      lastName: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      password: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      profileImage: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      city: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      country: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      bannerImage: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      collection: z
        .lazy(() => CollectionItemListRelationFilterSchema)
        .optional(),
      tradeOffers: z.lazy(() => TradeOfferListRelationFilterSchema).optional(),
      TradeRequests: z
        .lazy(() => TradeRequestListRelationFilterSchema)
        .optional(),
      pushNotification: z
        .lazy(() => PushNotificationListRelationFilterSchema)
        .optional(),
    })
    .strict();

export default UserWhereUniqueInputSchema;
