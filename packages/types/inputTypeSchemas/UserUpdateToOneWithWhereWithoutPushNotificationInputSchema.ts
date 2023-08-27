import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutPushNotificationInputSchema } from './UserUpdateWithoutPushNotificationInputSchema';
import { UserUncheckedUpdateWithoutPushNotificationInputSchema } from './UserUncheckedUpdateWithoutPushNotificationInputSchema';

export const UserUpdateToOneWithWhereWithoutPushNotificationInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPushNotificationInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutPushNotificationInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPushNotificationInputSchema),
      ]),
    })
    .strict();

export default UserUpdateToOneWithWhereWithoutPushNotificationInputSchema;
