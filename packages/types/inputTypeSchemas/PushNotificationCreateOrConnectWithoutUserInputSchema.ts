import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationWhereUniqueInputSchema } from './PushNotificationWhereUniqueInputSchema';
import { PushNotificationCreateWithoutUserInputSchema } from './PushNotificationCreateWithoutUserInputSchema';
import { PushNotificationUncheckedCreateWithoutUserInputSchema } from './PushNotificationUncheckedCreateWithoutUserInputSchema';

export const PushNotificationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.PushNotificationCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PushNotificationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PushNotificationCreateWithoutUserInputSchema),
        z.lazy(() => PushNotificationUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export default PushNotificationCreateOrConnectWithoutUserInputSchema;
