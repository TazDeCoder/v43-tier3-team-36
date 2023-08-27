import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemCreateWithoutTradeOfferInputSchema } from './CollectionItemCreateWithoutTradeOfferInputSchema';
import { CollectionItemUncheckedCreateWithoutTradeOfferInputSchema } from './CollectionItemUncheckedCreateWithoutTradeOfferInputSchema';
import { CollectionItemCreateOrConnectWithoutTradeOfferInputSchema } from './CollectionItemCreateOrConnectWithoutTradeOfferInputSchema';
import { CollectionItemUpsertWithWhereUniqueWithoutTradeOfferInputSchema } from './CollectionItemUpsertWithWhereUniqueWithoutTradeOfferInputSchema';
import { CollectionItemCreateManyTradeOfferInputEnvelopeSchema } from './CollectionItemCreateManyTradeOfferInputEnvelopeSchema';
import { CollectionItemWhereUniqueInputSchema } from './CollectionItemWhereUniqueInputSchema';
import { CollectionItemUpdateWithWhereUniqueWithoutTradeOfferInputSchema } from './CollectionItemUpdateWithWhereUniqueWithoutTradeOfferInputSchema';
import { CollectionItemUpdateManyWithWhereWithoutTradeOfferInputSchema } from './CollectionItemUpdateManyWithWhereWithoutTradeOfferInputSchema';
import { CollectionItemScalarWhereInputSchema } from './CollectionItemScalarWhereInputSchema';

export const CollectionItemUpdateManyWithoutTradeOfferNestedInputSchema: z.ZodType<Prisma.CollectionItemUpdateManyWithoutTradeOfferNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CollectionItemCreateWithoutTradeOfferInputSchema),
          z
            .lazy(() => CollectionItemCreateWithoutTradeOfferInputSchema)
            .array(),
          z.lazy(
            () => CollectionItemUncheckedCreateWithoutTradeOfferInputSchema,
          ),
          z
            .lazy(
              () => CollectionItemUncheckedCreateWithoutTradeOfferInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => CollectionItemCreateOrConnectWithoutTradeOfferInputSchema,
          ),
          z
            .lazy(
              () => CollectionItemCreateOrConnectWithoutTradeOfferInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              CollectionItemUpsertWithWhereUniqueWithoutTradeOfferInputSchema,
          ),
          z
            .lazy(
              () =>
                CollectionItemUpsertWithWhereUniqueWithoutTradeOfferInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CollectionItemCreateManyTradeOfferInputEnvelopeSchema)
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
            () =>
              CollectionItemUpdateWithWhereUniqueWithoutTradeOfferInputSchema,
          ),
          z
            .lazy(
              () =>
                CollectionItemUpdateWithWhereUniqueWithoutTradeOfferInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => CollectionItemUpdateManyWithWhereWithoutTradeOfferInputSchema,
          ),
          z
            .lazy(
              () =>
                CollectionItemUpdateManyWithWhereWithoutTradeOfferInputSchema,
            )
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

export default CollectionItemUpdateManyWithoutTradeOfferNestedInputSchema;
