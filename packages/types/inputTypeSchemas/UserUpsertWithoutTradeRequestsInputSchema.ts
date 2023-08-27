import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutTradeRequestsInputSchema } from './UserUpdateWithoutTradeRequestsInputSchema';
import { UserUncheckedUpdateWithoutTradeRequestsInputSchema } from './UserUncheckedUpdateWithoutTradeRequestsInputSchema';
import { UserCreateWithoutTradeRequestsInputSchema } from './UserCreateWithoutTradeRequestsInputSchema';
import { UserUncheckedCreateWithoutTradeRequestsInputSchema } from './UserUncheckedCreateWithoutTradeRequestsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutTradeRequestsInputSchema: z.ZodType<Prisma.UserUpsertWithoutTradeRequestsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutTradeRequestsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTradeRequestsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutTradeRequestsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutTradeRequestsInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export default UserUpsertWithoutTradeRequestsInputSchema;
