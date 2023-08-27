import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationWhereInputSchema } from './PushNotificationWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const PushNotificationWhereUniqueInputSchema: z.ZodType<Prisma.PushNotificationWhereUniqueInput> =
  z
    .object({
      id: z.string().optional(),
      AND: z
        .union([
          z.lazy(() => PushNotificationWhereInputSchema),
          z.lazy(() => PushNotificationWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PushNotificationWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PushNotificationWhereInputSchema),
          z.lazy(() => PushNotificationWhereInputSchema).array(),
        ])
        .optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      message: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      isRead: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      user: z
        .union([
          z.lazy(() => UserRelationFilterSchema),
          z.lazy(() => UserWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export default PushNotificationWhereUniqueInputSchema;
