import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationCreateWithoutUserInputSchema } from './PushNotificationCreateWithoutUserInputSchema';
import { PushNotificationUncheckedCreateWithoutUserInputSchema } from './PushNotificationUncheckedCreateWithoutUserInputSchema';
import { PushNotificationCreateOrConnectWithoutUserInputSchema } from './PushNotificationCreateOrConnectWithoutUserInputSchema';
import { PushNotificationCreateManyUserInputEnvelopeSchema } from './PushNotificationCreateManyUserInputEnvelopeSchema';
import { PushNotificationWhereUniqueInputSchema } from './PushNotificationWhereUniqueInputSchema';

export const PushNotificationUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.PushNotificationUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PushNotificationCreateWithoutUserInputSchema),
          z.lazy(() => PushNotificationCreateWithoutUserInputSchema).array(),
          z.lazy(() => PushNotificationUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => PushNotificationUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PushNotificationCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => PushNotificationCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PushNotificationCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PushNotificationWhereUniqueInputSchema),
          z.lazy(() => PushNotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default PushNotificationUncheckedCreateNestedManyWithoutUserInputSchema;
