import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationWhereInputSchema } from '../inputTypeSchemas/PushNotificationWhereInputSchema';
import { PushNotificationOrderByWithRelationInputSchema } from '../inputTypeSchemas/PushNotificationOrderByWithRelationInputSchema';
import { PushNotificationWhereUniqueInputSchema } from '../inputTypeSchemas/PushNotificationWhereUniqueInputSchema';

export const PushNotificationAggregateArgsSchema: z.ZodType<Prisma.PushNotificationAggregateArgs> =
  z
    .object({
      where: PushNotificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          PushNotificationOrderByWithRelationInputSchema.array(),
          PushNotificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: PushNotificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default PushNotificationAggregateArgsSchema;
