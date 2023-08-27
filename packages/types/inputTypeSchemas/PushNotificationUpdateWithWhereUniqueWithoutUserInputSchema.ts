import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationWhereUniqueInputSchema } from './PushNotificationWhereUniqueInputSchema';
import { PushNotificationUpdateWithoutUserInputSchema } from './PushNotificationUpdateWithoutUserInputSchema';
import { PushNotificationUncheckedUpdateWithoutUserInputSchema } from './PushNotificationUncheckedUpdateWithoutUserInputSchema';

export const PushNotificationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PushNotificationUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PushNotificationWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => PushNotificationUpdateWithoutUserInputSchema),
        z.lazy(() => PushNotificationUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export default PushNotificationUpdateWithWhereUniqueWithoutUserInputSchema;
