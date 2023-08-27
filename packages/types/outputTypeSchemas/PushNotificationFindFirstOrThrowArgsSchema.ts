import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PushNotificationIncludeSchema } from '../inputTypeSchemas/PushNotificationIncludeSchema';
import { PushNotificationWhereInputSchema } from '../inputTypeSchemas/PushNotificationWhereInputSchema';
import { PushNotificationOrderByWithRelationInputSchema } from '../inputTypeSchemas/PushNotificationOrderByWithRelationInputSchema';
import { PushNotificationWhereUniqueInputSchema } from '../inputTypeSchemas/PushNotificationWhereUniqueInputSchema';
import { PushNotificationScalarFieldEnumSchema } from '../inputTypeSchemas/PushNotificationScalarFieldEnumSchema';
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

export const PushNotificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PushNotificationFindFirstOrThrowArgs> =
  z
    .object({
      select: PushNotificationSelectSchema.optional(),
      include: PushNotificationIncludeSchema.optional(),
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
      distinct: z
        .union([
          PushNotificationScalarFieldEnumSchema,
          PushNotificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default PushNotificationFindFirstOrThrowArgsSchema;
