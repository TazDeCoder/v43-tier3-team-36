import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PushNotificationCreateManyInputSchema: z.ZodType<Prisma.PushNotificationCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      userId: z.string(),
      message: z.string(),
      isRead: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export default PushNotificationCreateManyInputSchema;
