import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutTradeRequestsInputSchema } from './UserCreateWithoutTradeRequestsInputSchema';
import { UserUncheckedCreateWithoutTradeRequestsInputSchema } from './UserUncheckedCreateWithoutTradeRequestsInputSchema';

export const UserCreateOrConnectWithoutTradeRequestsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTradeRequestsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutTradeRequestsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutTradeRequestsInputSchema),
      ]),
    })
    .strict();

export default UserCreateOrConnectWithoutTradeRequestsInputSchema;
