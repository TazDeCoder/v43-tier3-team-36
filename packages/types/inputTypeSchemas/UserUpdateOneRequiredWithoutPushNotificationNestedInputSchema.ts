import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPushNotificationInputSchema } from './UserCreateWithoutPushNotificationInputSchema';
import { UserUncheckedCreateWithoutPushNotificationInputSchema } from './UserUncheckedCreateWithoutPushNotificationInputSchema';
import { UserCreateOrConnectWithoutPushNotificationInputSchema } from './UserCreateOrConnectWithoutPushNotificationInputSchema';
import { UserUpsertWithoutPushNotificationInputSchema } from './UserUpsertWithoutPushNotificationInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutPushNotificationInputSchema } from './UserUpdateToOneWithWhereWithoutPushNotificationInputSchema';
import { UserUpdateWithoutPushNotificationInputSchema } from './UserUpdateWithoutPushNotificationInputSchema';
import { UserUncheckedUpdateWithoutPushNotificationInputSchema } from './UserUncheckedUpdateWithoutPushNotificationInputSchema';

export const UserUpdateOneRequiredWithoutPushNotificationNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPushNotificationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPushNotificationInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutPushNotificationInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPushNotificationInputSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutPushNotificationInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateToOneWithWhereWithoutPushNotificationInputSchema,
          ),
          z.lazy(() => UserUpdateWithoutPushNotificationInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPushNotificationInputSchema),
        ])
        .optional(),
    })
    .strict();

export default UserUpdateOneRequiredWithoutPushNotificationNestedInputSchema;
