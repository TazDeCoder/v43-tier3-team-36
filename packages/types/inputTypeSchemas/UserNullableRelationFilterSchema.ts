import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserNullableRelationFilterSchema: z.ZodType<Prisma.UserNullableRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => UserWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => UserWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export default UserNullableRelationFilterSchema;
