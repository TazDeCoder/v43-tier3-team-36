import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PushNotificationScalarWhereInputSchema: z.ZodType<Prisma.PushNotificationScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PushNotificationScalarWhereInputSchema),
          z.lazy(() => PushNotificationScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PushNotificationScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PushNotificationScalarWhereInputSchema),
          z.lazy(() => PushNotificationScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
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
    })
    .strict();

export default PushNotificationScalarWhereInputSchema;
