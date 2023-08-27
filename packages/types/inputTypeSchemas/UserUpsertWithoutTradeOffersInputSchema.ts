import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutTradeOffersInputSchema } from './UserUpdateWithoutTradeOffersInputSchema';
import { UserUncheckedUpdateWithoutTradeOffersInputSchema } from './UserUncheckedUpdateWithoutTradeOffersInputSchema';
import { UserCreateWithoutTradeOffersInputSchema } from './UserCreateWithoutTradeOffersInputSchema';
import { UserUncheckedCreateWithoutTradeOffersInputSchema } from './UserUncheckedCreateWithoutTradeOffersInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutTradeOffersInputSchema: z.ZodType<Prisma.UserUpsertWithoutTradeOffersInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutTradeOffersInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTradeOffersInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutTradeOffersInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutTradeOffersInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export default UserUpsertWithoutTradeOffersInputSchema;
