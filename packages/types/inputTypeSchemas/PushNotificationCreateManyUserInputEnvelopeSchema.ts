import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationCreateManyUserInputSchema } from './PushNotificationCreateManyUserInputSchema';

export const PushNotificationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.PushNotificationCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => PushNotificationCreateManyUserInputSchema),
        z.lazy(() => PushNotificationCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default PushNotificationCreateManyUserInputEnvelopeSchema;
