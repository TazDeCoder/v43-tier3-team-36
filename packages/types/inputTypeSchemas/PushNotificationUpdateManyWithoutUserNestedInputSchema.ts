import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationCreateWithoutUserInputSchema } from './PushNotificationCreateWithoutUserInputSchema';
import { PushNotificationUncheckedCreateWithoutUserInputSchema } from './PushNotificationUncheckedCreateWithoutUserInputSchema';
import { PushNotificationCreateOrConnectWithoutUserInputSchema } from './PushNotificationCreateOrConnectWithoutUserInputSchema';
import { PushNotificationUpsertWithWhereUniqueWithoutUserInputSchema } from './PushNotificationUpsertWithWhereUniqueWithoutUserInputSchema';
import { PushNotificationCreateManyUserInputEnvelopeSchema } from './PushNotificationCreateManyUserInputEnvelopeSchema';
import { PushNotificationWhereUniqueInputSchema } from './PushNotificationWhereUniqueInputSchema';
import { PushNotificationUpdateWithWhereUniqueWithoutUserInputSchema } from './PushNotificationUpdateWithWhereUniqueWithoutUserInputSchema';
import { PushNotificationUpdateManyWithWhereWithoutUserInputSchema } from './PushNotificationUpdateManyWithWhereWithoutUserInputSchema';
import { PushNotificationScalarWhereInputSchema } from './PushNotificationScalarWhereInputSchema';

export const PushNotificationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.PushNotificationUpdateManyWithoutUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => PushNotificationUpsertWithWhereUniqueWithoutUserInputSchema,
          ),
          z
            .lazy(
              () => PushNotificationUpsertWithWhereUniqueWithoutUserInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PushNotificationCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PushNotificationWhereUniqueInputSchema),
          z.lazy(() => PushNotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PushNotificationWhereUniqueInputSchema),
          z.lazy(() => PushNotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PushNotificationWhereUniqueInputSchema),
          z.lazy(() => PushNotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PushNotificationWhereUniqueInputSchema),
          z.lazy(() => PushNotificationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PushNotificationUpdateWithWhereUniqueWithoutUserInputSchema,
          ),
          z
            .lazy(
              () => PushNotificationUpdateWithWhereUniqueWithoutUserInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PushNotificationUpdateManyWithWhereWithoutUserInputSchema,
          ),
          z
            .lazy(
              () => PushNotificationUpdateManyWithWhereWithoutUserInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PushNotificationScalarWhereInputSchema),
          z.lazy(() => PushNotificationScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default PushNotificationUpdateManyWithoutUserNestedInputSchema;
