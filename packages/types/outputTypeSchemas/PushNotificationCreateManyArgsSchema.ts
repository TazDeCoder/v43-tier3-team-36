import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationCreateManyInputSchema } from '../inputTypeSchemas/PushNotificationCreateManyInputSchema';

export const PushNotificationCreateManyArgsSchema: z.ZodType<Prisma.PushNotificationCreateManyArgs> =
  z
    .object({
      data: z.union([
        PushNotificationCreateManyInputSchema,
        PushNotificationCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default PushNotificationCreateManyArgsSchema;
