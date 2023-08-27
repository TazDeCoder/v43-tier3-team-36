import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutTradeOffersInputSchema } from './UserUpdateWithoutTradeOffersInputSchema';
import { UserUncheckedUpdateWithoutTradeOffersInputSchema } from './UserUncheckedUpdateWithoutTradeOffersInputSchema';

export const UserUpdateToOneWithWhereWithoutTradeOffersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTradeOffersInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutTradeOffersInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTradeOffersInputSchema),
      ]),
    })
    .strict();

export default UserUpdateToOneWithWhereWithoutTradeOffersInputSchema;
