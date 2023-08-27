import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const PushNotificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.PushNotificationMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      message: z.lazy(() => SortOrderSchema).optional(),
      isRead: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default PushNotificationMinOrderByAggregateInputSchema;
