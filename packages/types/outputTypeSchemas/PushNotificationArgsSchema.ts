import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { PushNotificationSelectSchema } from '../inputTypeSchemas/PushNotificationSelectSchema';
import { PushNotificationIncludeSchema } from '../inputTypeSchemas/PushNotificationIncludeSchema';

export const PushNotificationArgsSchema: z.ZodType<Prisma.PushNotificationArgs> =
  z
    .object({
      select: z.lazy(() => PushNotificationSelectSchema).optional(),
      include: z.lazy(() => PushNotificationIncludeSchema).optional(),
    })
    .strict();

export default PushNotificationArgsSchema;
