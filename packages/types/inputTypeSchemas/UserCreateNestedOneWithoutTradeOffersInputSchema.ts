import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutTradeOffersInputSchema } from './UserCreateWithoutTradeOffersInputSchema';
import { UserUncheckedCreateWithoutTradeOffersInputSchema } from './UserUncheckedCreateWithoutTradeOffersInputSchema';
import { UserCreateOrConnectWithoutTradeOffersInputSchema } from './UserCreateOrConnectWithoutTradeOffersInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutTradeOffersInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTradeOffersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutTradeOffersInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutTradeOffersInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutTradeOffersInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export default UserCreateNestedOneWithoutTradeOffersInputSchema;
