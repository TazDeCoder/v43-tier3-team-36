import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutTradeRequestsInputSchema } from './UserCreateWithoutTradeRequestsInputSchema';
import { UserUncheckedCreateWithoutTradeRequestsInputSchema } from './UserUncheckedCreateWithoutTradeRequestsInputSchema';
import { UserCreateOrConnectWithoutTradeRequestsInputSchema } from './UserCreateOrConnectWithoutTradeRequestsInputSchema';
import { UserUpsertWithoutTradeRequestsInputSchema } from './UserUpsertWithoutTradeRequestsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutTradeRequestsInputSchema } from './UserUpdateToOneWithWhereWithoutTradeRequestsInputSchema';
import { UserUpdateWithoutTradeRequestsInputSchema } from './UserUpdateWithoutTradeRequestsInputSchema';
import { UserUncheckedUpdateWithoutTradeRequestsInputSchema } from './UserUncheckedUpdateWithoutTradeRequestsInputSchema';

export const UserUpdateOneRequiredWithoutTradeRequestsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTradeRequestsNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutTradeRequestsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutTradeRequestsInputSchema),
          z.lazy(() => UserUpdateWithoutTradeRequestsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutTradeRequestsInputSchema),
        ])
        .optional(),
    })
    .strict();

export default UserUpdateOneRequiredWithoutTradeRequestsNestedInputSchema;
