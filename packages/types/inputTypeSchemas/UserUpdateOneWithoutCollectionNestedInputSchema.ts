import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCollectionInputSchema } from './UserCreateWithoutCollectionInputSchema';
import { UserUncheckedCreateWithoutCollectionInputSchema } from './UserUncheckedCreateWithoutCollectionInputSchema';
import { UserCreateOrConnectWithoutCollectionInputSchema } from './UserCreateOrConnectWithoutCollectionInputSchema';
import { UserUpsertWithoutCollectionInputSchema } from './UserUpsertWithoutCollectionInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCollectionInputSchema } from './UserUpdateToOneWithWhereWithoutCollectionInputSchema';
import { UserUpdateWithoutCollectionInputSchema } from './UserUpdateWithoutCollectionInputSchema';
import { UserUncheckedUpdateWithoutCollectionInputSchema } from './UserUncheckedUpdateWithoutCollectionInputSchema';

export const UserUpdateOneWithoutCollectionNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutCollectionNestedInput> =
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
      upsert: z.lazy(() => UserUpsertWithoutCollectionInputSchema).optional(),
      disconnect: z
        .union([z.boolean(), z.lazy(() => UserWhereInputSchema)])
        .optional(),
      delete: z
        .union([z.boolean(), z.lazy(() => UserWhereInputSchema)])
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutCollectionInputSchema),
          z.lazy(() => UserUpdateWithoutCollectionInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutCollectionInputSchema),
        ])
        .optional(),
    })
    .strict();

export default UserUpdateOneWithoutCollectionNestedInputSchema;
