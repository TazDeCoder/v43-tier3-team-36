import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';

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

export default PushNotificationSelectSchema;
