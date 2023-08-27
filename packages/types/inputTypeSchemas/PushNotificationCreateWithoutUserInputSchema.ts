import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PushNotificationCreateWithoutUserInputSchema: z.ZodType<Prisma.PushNotificationCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      message: z.string(),
      isRead: z.boolean().optional(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export default PushNotificationCreateWithoutUserInputSchema;
