import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutPushNotificationInputSchema } from './UserCreateNestedOneWithoutPushNotificationInputSchema';

export const PushNotificationCreateInputSchema: z.ZodType<Prisma.PushNotificationCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      message: z.string(),
      isRead: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutPushNotificationInputSchema),
    })
    .strict();

export default PushNotificationCreateInputSchema;
