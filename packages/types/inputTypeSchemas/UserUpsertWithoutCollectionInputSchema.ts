import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutCollectionInputSchema } from './UserUpdateWithoutCollectionInputSchema';
import { UserUncheckedUpdateWithoutCollectionInputSchema } from './UserUncheckedUpdateWithoutCollectionInputSchema';
import { UserCreateWithoutCollectionInputSchema } from './UserCreateWithoutCollectionInputSchema';
import { UserUncheckedCreateWithoutCollectionInputSchema } from './UserUncheckedCreateWithoutCollectionInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCollectionInputSchema: z.ZodType<Prisma.UserUpsertWithoutCollectionInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutCollectionInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutCollectionInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutCollectionInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutCollectionInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export default UserUpsertWithoutCollectionInputSchema;
