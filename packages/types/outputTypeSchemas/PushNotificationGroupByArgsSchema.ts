import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationWhereInputSchema } from '../inputTypeSchemas/PushNotificationWhereInputSchema';
import { PushNotificationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PushNotificationOrderByWithAggregationInputSchema';
import { PushNotificationScalarFieldEnumSchema } from '../inputTypeSchemas/PushNotificationScalarFieldEnumSchema';
import { PushNotificationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PushNotificationScalarWhereWithAggregatesInputSchema';

export const PushNotificationGroupByArgsSchema: z.ZodType<Prisma.PushNotificationGroupByArgs> =
  z
    .object({
      where: PushNotificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          PushNotificationOrderByWithAggregationInputSchema.array(),
          PushNotificationOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: PushNotificationScalarFieldEnumSchema.array(),
      having: PushNotificationScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default PushNotificationGroupByArgsSchema;
