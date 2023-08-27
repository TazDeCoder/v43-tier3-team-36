import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPushNotificationInputSchema } from './UserCreateWithoutPushNotificationInputSchema';
import { UserUncheckedCreateWithoutPushNotificationInputSchema } from './UserUncheckedCreateWithoutPushNotificationInputSchema';
import { UserCreateOrConnectWithoutPushNotificationInputSchema } from './UserCreateOrConnectWithoutPushNotificationInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutPushNotificationInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPushNotificationInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export default UserCreateNestedOneWithoutPushNotificationInputSchema;
