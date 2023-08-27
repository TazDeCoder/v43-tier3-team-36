import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';
import { PushNotificationCountOrderByAggregateInputSchema } from './PushNotificationCountOrderByAggregateInputSchema';
import { PushNotificationMaxOrderByAggregateInputSchema } from './PushNotificationMaxOrderByAggregateInputSchema';
import { PushNotificationMinOrderByAggregateInputSchema } from './PushNotificationMinOrderByAggregateInputSchema';

export const PushNotificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.PushNotificationOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      message: z.lazy(() => SortOrderSchema).optional(),
      isRead: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => PushNotificationCountOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => PushNotificationMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => PushNotificationMinOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export default PushNotificationOrderByWithAggregationInputSchema;
