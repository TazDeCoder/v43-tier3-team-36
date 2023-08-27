import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationWhereInputSchema } from './PushNotificationWhereInputSchema';

export const PushNotificationListRelationFilterSchema: z.ZodType<Prisma.PushNotificationListRelationFilter> =
  z
    .object({
      every: z.lazy(() => PushNotificationWhereInputSchema).optional(),
      some: z.lazy(() => PushNotificationWhereInputSchema).optional(),
      none: z.lazy(() => PushNotificationWhereInputSchema).optional(),
    })
    .strict();

export default PushNotificationListRelationFilterSchema;
