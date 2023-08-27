import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemCreateWithoutUserInputSchema } from './CollectionItemCreateWithoutUserInputSchema';
import { CollectionItemUncheckedCreateWithoutUserInputSchema } from './CollectionItemUncheckedCreateWithoutUserInputSchema';
import { CollectionItemCreateOrConnectWithoutUserInputSchema } from './CollectionItemCreateOrConnectWithoutUserInputSchema';
import { CollectionItemCreateManyUserInputEnvelopeSchema } from './CollectionItemCreateManyUserInputEnvelopeSchema';
import { CollectionItemWhereUniqueInputSchema } from './CollectionItemWhereUniqueInputSchema';

export const CollectionItemUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CollectionItemUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z
        .lazy(() => CollectionItemCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CollectionItemWhereUniqueInputSchema),
          z.lazy(() => CollectionItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default CollectionItemUncheckedCreateNestedManyWithoutUserInputSchema;
