import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationIncludeSchema } from '../inputTypeSchemas/PushNotificationIncludeSchema';
import { PushNotificationWhereUniqueInputSchema } from '../inputTypeSchemas/PushNotificationWhereUniqueInputSchema';
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

export const PushNotificationFindUniqueArgsSchema: z.ZodType<Prisma.PushNotificationFindUniqueArgs> =
  z
    .object({
      select: PushNotificationSelectSchema.optional(),
      include: PushNotificationIncludeSchema.optional(),
      where: PushNotificationWhereUniqueInputSchema,
    })
    .strict();

export default PushNotificationFindUniqueArgsSchema;
