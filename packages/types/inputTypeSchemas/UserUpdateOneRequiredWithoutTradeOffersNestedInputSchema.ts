import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutTradeOffersInputSchema } from './UserCreateWithoutTradeOffersInputSchema';
import { UserUncheckedCreateWithoutTradeOffersInputSchema } from './UserUncheckedCreateWithoutTradeOffersInputSchema';
import { UserCreateOrConnectWithoutTradeOffersInputSchema } from './UserCreateOrConnectWithoutTradeOffersInputSchema';
import { UserUpsertWithoutTradeOffersInputSchema } from './UserUpsertWithoutTradeOffersInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutTradeOffersInputSchema } from './UserUpdateToOneWithWhereWithoutTradeOffersInputSchema';
import { UserUpdateWithoutTradeOffersInputSchema } from './UserUpdateWithoutTradeOffersInputSchema';
import { UserUncheckedUpdateWithoutTradeOffersInputSchema } from './UserUncheckedUpdateWithoutTradeOffersInputSchema';

export const UserUpdateOneRequiredWithoutTradeOffersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTradeOffersNestedInput> =
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
      upsert: z.lazy(() => UserUpsertWithoutTradeOffersInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutTradeOffersInputSchema),
          z.lazy(() => UserUpdateWithoutTradeOffersInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutTradeOffersInputSchema),
        ])
        .optional(),
    })
    .strict();

export default UserUpdateOneRequiredWithoutTradeOffersNestedInputSchema;
