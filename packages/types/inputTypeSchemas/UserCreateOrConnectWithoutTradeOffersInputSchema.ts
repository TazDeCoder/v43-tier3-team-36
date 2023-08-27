import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutTradeOffersInputSchema } from './UserCreateWithoutTradeOffersInputSchema';
import { UserUncheckedCreateWithoutTradeOffersInputSchema } from './UserUncheckedCreateWithoutTradeOffersInputSchema';

export const UserCreateOrConnectWithoutTradeOffersInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTradeOffersInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutTradeOffersInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutTradeOffersInputSchema),
      ]),
    })
    .strict();

export default UserCreateOrConnectWithoutTradeOffersInputSchema;
