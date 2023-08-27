import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CollectionItemOrderByRelationAggregateInputSchema } from './CollectionItemOrderByRelationAggregateInputSchema';
import { TradeOfferOrderByRelationAggregateInputSchema } from './TradeOfferOrderByRelationAggregateInputSchema';
import { TradeRequestOrderByRelationAggregateInputSchema } from './TradeRequestOrderByRelationAggregateInputSchema';
import { PushNotificationOrderByRelationAggregateInputSchema } from './PushNotificationOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      profileImage: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      city: z.lazy(() => SortOrderSchema).optional(),
      country: z.lazy(() => SortOrderSchema).optional(),
      bannerImage: z.lazy(() => SortOrderSchema).optional(),
      collection: z
        .lazy(() => CollectionItemOrderByRelationAggregateInputSchema)
        .optional(),
      tradeOffers: z
        .lazy(() => TradeOfferOrderByRelationAggregateInputSchema)
        .optional(),
      TradeRequests: z
        .lazy(() => TradeRequestOrderByRelationAggregateInputSchema)
        .optional(),
      pushNotification: z
        .lazy(() => PushNotificationOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export default UserOrderByWithRelationInputSchema;
