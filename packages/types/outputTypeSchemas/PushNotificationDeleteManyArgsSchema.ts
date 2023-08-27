import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationWhereInputSchema } from '../inputTypeSchemas/PushNotificationWhereInputSchema';

export const PushNotificationDeleteManyArgsSchema: z.ZodType<Prisma.PushNotificationDeleteManyArgs> =
  z
    .object({
      where: PushNotificationWhereInputSchema.optional(),
    })
    .strict();

export default PushNotificationDeleteManyArgsSchema;
