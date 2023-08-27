import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutPushNotificationInputSchema } from './UserCreateWithoutPushNotificationInputSchema';
import { UserUncheckedCreateWithoutPushNotificationInputSchema } from './UserUncheckedCreateWithoutPushNotificationInputSchema';

export const UserCreateOrConnectWithoutPushNotificationInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPushNotificationInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutPushNotificationInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutPushNotificationInputSchema),
      ]),
    })
    .strict();

export default UserCreateOrConnectWithoutPushNotificationInputSchema;
