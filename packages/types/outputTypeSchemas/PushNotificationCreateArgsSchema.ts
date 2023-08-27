import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationIncludeSchema } from '../inputTypeSchemas/PushNotificationIncludeSchema';
import { PushNotificationCreateInputSchema } from '../inputTypeSchemas/PushNotificationCreateInputSchema';
import { PushNotificationUncheckedCreateInputSchema } from '../inputTypeSchemas/PushNotificationUncheckedCreateInputSchema';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PushNotificationSelectSchema: z.ZodType<Prisma.PushNotificationSelect> =
  z
    .object({
      id: z.boolean().optional(),
      userId: z.boolean().optional(),
      message: z.boolean().optional(),
      isRead: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    })
    .strict();

export const PushNotificationCreateArgsSchema: z.ZodType<Prisma.PushNotificationCreateArgs> =
  z
    .object({
      select: PushNotificationSelectSchema.optional(),
      include: PushNotificationIncludeSchema.optional(),
      data: z.union([
        PushNotificationCreateInputSchema,
        PushNotificationUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export default PushNotificationCreateArgsSchema;
