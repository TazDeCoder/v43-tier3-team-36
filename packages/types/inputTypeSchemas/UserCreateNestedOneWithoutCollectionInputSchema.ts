import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCollectionInputSchema } from './UserCreateWithoutCollectionInputSchema';
import { UserUncheckedCreateWithoutCollectionInputSchema } from './UserUncheckedCreateWithoutCollectionInputSchema';
import { UserCreateOrConnectWithoutCollectionInputSchema } from './UserCreateOrConnectWithoutCollectionInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCollectionInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCollectionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCollectionInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutCollectionInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCollectionInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export default UserCreateNestedOneWithoutCollectionInputSchema;
