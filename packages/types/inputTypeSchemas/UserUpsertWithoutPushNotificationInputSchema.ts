import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutPushNotificationInputSchema } from './UserUpdateWithoutPushNotificationInputSchema';
import { UserUncheckedUpdateWithoutPushNotificationInputSchema } from './UserUncheckedUpdateWithoutPushNotificationInputSchema';
import { UserCreateWithoutPushNotificationInputSchema } from './UserCreateWithoutPushNotificationInputSchema';
import { UserUncheckedCreateWithoutPushNotificationInputSchema } from './UserUncheckedCreateWithoutPushNotificationInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutPushNotificationInputSchema: z.ZodType<Prisma.UserUpsertWithoutPushNotificationInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutPushNotificationInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPushNotificationInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutPushNotificationInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutPushNotificationInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export default UserUpsertWithoutPushNotificationInputSchema;
