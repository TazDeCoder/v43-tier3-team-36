import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationUpdateManyMutationInputSchema } from '../inputTypeSchemas/PushNotificationUpdateManyMutationInputSchema';
import { PushNotificationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PushNotificationUncheckedUpdateManyInputSchema';
import { PushNotificationWhereInputSchema } from '../inputTypeSchemas/PushNotificationWhereInputSchema';

export const PushNotificationUpdateManyArgsSchema: z.ZodType<Prisma.PushNotificationUpdateManyArgs> =
  z
    .object({
      data: z.union([
        PushNotificationUpdateManyMutationInputSchema,
        PushNotificationUncheckedUpdateManyInputSchema,
      ]),
      where: PushNotificationWhereInputSchema.optional(),
    })
    .strict();

export default PushNotificationUpdateManyArgsSchema;
