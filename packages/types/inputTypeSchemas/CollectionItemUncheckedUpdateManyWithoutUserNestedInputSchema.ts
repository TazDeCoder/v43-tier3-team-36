import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemCreateWithoutUserInputSchema } from './CollectionItemCreateWithoutUserInputSchema';
import { CollectionItemUncheckedCreateWithoutUserInputSchema } from './CollectionItemUncheckedCreateWithoutUserInputSchema';
import { CollectionItemCreateOrConnectWithoutUserInputSchema } from './CollectionItemCreateOrConnectWithoutUserInputSchema';
import { CollectionItemUpsertWithWhereUniqueWithoutUserInputSchema } from './CollectionItemUpsertWithWhereUniqueWithoutUserInputSchema';
import { CollectionItemCreateManyUserInputEnvelopeSchema } from './CollectionItemCreateManyUserInputEnvelopeSchema';
import { CollectionItemWhereUniqueInputSchema } from './CollectionItemWhereUniqueInputSchema';
import { CollectionItemUpdateWithWhereUniqueWithoutUserInputSchema } from './CollectionItemUpdateWithWhereUniqueWithoutUserInputSchema';
import { CollectionItemUpdateManyWithWhereWithoutUserInputSchema } from './CollectionItemUpdateManyWithWhereWithoutUserInputSchema';
import { CollectionItemScalarWhereInputSchema } from './CollectionItemScalarWhereInputSchema';

export const CollectionItemUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CollectionItemUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CollectionItemCreateWithoutUserInputSchema),
          z.lazy(() => CollectionItemCreateWithoutUserInputSchema).array(),
          z.lazy(() => CollectionItemUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => CollectionItemUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CollectionItemCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => CollectionItemCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => CollectionItemUpsertWithWhereUniqueWithoutUserInputSchema,
          ),
          z
            .lazy(
              () => CollectionItemUpsertWithWhereUniqueWithoutUserInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CollectionItemCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CollectionItemWhereUniqueInputSchema),
          z.lazy(() => CollectionItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CollectionItemWhereUniqueInputSchema),
          z.lazy(() => CollectionItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CollectionItemWhereUniqueInputSchema),
          z.lazy(() => CollectionItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CollectionItemWhereUniqueInputSchema),
          z.lazy(() => CollectionItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => CollectionItemUpdateWithWhereUniqueWithoutUserInputSchema,
          ),
          z
            .lazy(
              () => CollectionItemUpdateWithWhereUniqueWithoutUserInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CollectionItemUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => CollectionItemUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CollectionItemScalarWhereInputSchema),
          z.lazy(() => CollectionItemScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default CollectionItemUncheckedUpdateManyWithoutUserNestedInputSchema;
