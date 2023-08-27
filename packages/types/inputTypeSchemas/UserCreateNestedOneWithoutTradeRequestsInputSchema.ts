import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutTradeRequestsInputSchema } from './UserCreateWithoutTradeRequestsInputSchema';
import { UserUncheckedCreateWithoutTradeRequestsInputSchema } from './UserUncheckedCreateWithoutTradeRequestsInputSchema';
import { UserCreateOrConnectWithoutTradeRequestsInputSchema } from './UserCreateOrConnectWithoutTradeRequestsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutTradeRequestsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTradeRequestsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutTradeRequestsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutTradeRequestsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutTradeRequestsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export default UserCreateNestedOneWithoutTradeRequestsInputSchema;
