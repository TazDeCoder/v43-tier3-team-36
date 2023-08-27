import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { CollectionItemListRelationFilterSchema } from './CollectionItemListRelationFilterSchema';
import { TradeOfferListRelationFilterSchema } from './TradeOfferListRelationFilterSchema';
import { TradeRequestListRelationFilterSchema } from './TradeRequestListRelationFilterSchema';
import { PushNotificationListRelationFilterSchema } from './PushNotificationListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
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
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    firstName: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    password: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    username: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    profileImage: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    city: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    country: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    bannerImage: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    collection: z.lazy(() => CollectionItemListRelationFilterSchema).optional(),
    tradeOffers: z.lazy(() => TradeOfferListRelationFilterSchema).optional(),
    TradeRequests: z
      .lazy(() => TradeRequestListRelationFilterSchema)
      .optional(),
    pushNotification: z
      .lazy(() => PushNotificationListRelationFilterSchema)
      .optional(),
  })
  .strict();

export default UserWhereInputSchema;
