import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutTradeRequestsInputSchema } from './UserUpdateWithoutTradeRequestsInputSchema';
import { UserUncheckedUpdateWithoutTradeRequestsInputSchema } from './UserUncheckedUpdateWithoutTradeRequestsInputSchema';

export const UserUpdateToOneWithWhereWithoutTradeRequestsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTradeRequestsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutTradeRequestsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTradeRequestsInputSchema),
      ]),
    })
    .strict();

export default UserUpdateToOneWithWhereWithoutTradeRequestsInputSchema;
