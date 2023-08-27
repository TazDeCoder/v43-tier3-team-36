import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCollectionInputSchema } from './UserUpdateWithoutCollectionInputSchema';
import { UserUncheckedUpdateWithoutCollectionInputSchema } from './UserUncheckedUpdateWithoutCollectionInputSchema';

export const UserUpdateToOneWithWhereWithoutCollectionInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCollectionInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutCollectionInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutCollectionInputSchema),
      ]),
    })
    .strict();

export default UserUpdateToOneWithWhereWithoutCollectionInputSchema;
