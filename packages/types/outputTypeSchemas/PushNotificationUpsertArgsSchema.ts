import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationIncludeSchema } from '../inputTypeSchemas/PushNotificationIncludeSchema';
import { PushNotificationWhereUniqueInputSchema } from '../inputTypeSchemas/PushNotificationWhereUniqueInputSchema';
import { PushNotificationCreateInputSchema } from '../inputTypeSchemas/PushNotificationCreateInputSchema';
import { PushNotificationUncheckedCreateInputSchema } from '../inputTypeSchemas/PushNotificationUncheckedCreateInputSchema';
import { PushNotificationUpdateInputSchema } from '../inputTypeSchemas/PushNotificationUpdateInputSchema';
import { PushNotificationUncheckedUpdateInputSchema } from '../inputTypeSchemas/PushNotificationUncheckedUpdateInputSchema';
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

export const PushNotificationUpsertArgsSchema: z.ZodType<Prisma.PushNotificationUpsertArgs> =
  z
    .object({
      select: PushNotificationSelectSchema.optional(),
      include: PushNotificationIncludeSchema.optional(),
      where: PushNotificationWhereUniqueInputSchema,
      create: z.union([
        PushNotificationCreateInputSchema,
        PushNotificationUncheckedCreateInputSchema,
      ]),
      update: z.union([
        PushNotificationUpdateInputSchema,
        PushNotificationUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export default PushNotificationUpsertArgsSchema;
