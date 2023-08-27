import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationWhereUniqueInputSchema } from './PushNotificationWhereUniqueInputSchema';
import { PushNotificationUpdateWithoutUserInputSchema } from './PushNotificationUpdateWithoutUserInputSchema';
import { PushNotificationUncheckedUpdateWithoutUserInputSchema } from './PushNotificationUncheckedUpdateWithoutUserInputSchema';
import { PushNotificationCreateWithoutUserInputSchema } from './PushNotificationCreateWithoutUserInputSchema';
import { PushNotificationUncheckedCreateWithoutUserInputSchema } from './PushNotificationUncheckedCreateWithoutUserInputSchema';

export const PushNotificationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PushNotificationUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PushNotificationWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => PushNotificationUpdateWithoutUserInputSchema),
        z.lazy(() => PushNotificationUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => PushNotificationCreateWithoutUserInputSchema),
        z.lazy(() => PushNotificationUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export default PushNotificationUpsertWithWhereUniqueWithoutUserInputSchema;
