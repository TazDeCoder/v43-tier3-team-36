import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PushNotificationCreateManyUserInputSchema: z.ZodType<Prisma.PushNotificationCreateManyUserInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      message: z.string(),
      isRead: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export default PushNotificationCreateManyUserInputSchema;
