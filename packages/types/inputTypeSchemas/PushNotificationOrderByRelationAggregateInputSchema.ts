import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from './SortOrderSchema';

export const PushNotificationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PushNotificationOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default PushNotificationOrderByRelationAggregateInputSchema;
