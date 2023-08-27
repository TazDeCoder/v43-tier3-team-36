import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemCreateWithoutTradeOfferInputSchema } from './CollectionItemCreateWithoutTradeOfferInputSchema';
import { CollectionItemUncheckedCreateWithoutTradeOfferInputSchema } from './CollectionItemUncheckedCreateWithoutTradeOfferInputSchema';
import { CollectionItemCreateOrConnectWithoutTradeOfferInputSchema } from './CollectionItemCreateOrConnectWithoutTradeOfferInputSchema';
import { CollectionItemCreateManyTradeOfferInputEnvelopeSchema } from './CollectionItemCreateManyTradeOfferInputEnvelopeSchema';
import { CollectionItemWhereUniqueInputSchema } from './CollectionItemWhereUniqueInputSchema';

export const CollectionItemCreateNestedManyWithoutTradeOfferInputSchema: z.ZodType<Prisma.CollectionItemCreateNestedManyWithoutTradeOfferInput> =
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
      createMany: z
        .lazy(() => CollectionItemCreateManyTradeOfferInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CollectionItemWhereUniqueInputSchema),
          z.lazy(() => CollectionItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default CollectionItemCreateNestedManyWithoutTradeOfferInputSchema;
