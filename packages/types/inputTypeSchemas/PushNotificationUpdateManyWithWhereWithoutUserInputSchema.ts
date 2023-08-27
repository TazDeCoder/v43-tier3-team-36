import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationScalarWhereInputSchema } from './PushNotificationScalarWhereInputSchema';
import { PushNotificationUpdateManyMutationInputSchema } from './PushNotificationUpdateManyMutationInputSchema';
import { PushNotificationUncheckedUpdateManyWithoutUserInputSchema } from './PushNotificationUncheckedUpdateManyWithoutUserInputSchema';

export const PushNotificationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.PushNotificationUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PushNotificationScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => PushNotificationUpdateManyMutationInputSchema),
        z.lazy(() => PushNotificationUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export default PushNotificationUpdateManyWithWhereWithoutUserInputSchema;
