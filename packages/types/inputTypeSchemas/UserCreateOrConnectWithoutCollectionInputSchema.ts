import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCollectionInputSchema } from './UserCreateWithoutCollectionInputSchema';
import { UserUncheckedCreateWithoutCollectionInputSchema } from './UserUncheckedCreateWithoutCollectionInputSchema';

export const UserCreateOrConnectWithoutCollectionInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCollectionInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCollectionInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutCollectionInputSchema),
      ]),
    })
    .strict();

export default UserCreateOrConnectWithoutCollectionInputSchema;
