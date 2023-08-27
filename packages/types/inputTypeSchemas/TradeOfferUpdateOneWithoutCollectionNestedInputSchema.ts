import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferCreateWithoutCollectionInputSchema } from './TradeOfferCreateWithoutCollectionInputSchema';
import { TradeOfferUncheckedCreateWithoutCollectionInputSchema } from './TradeOfferUncheckedCreateWithoutCollectionInputSchema';
import { TradeOfferCreateOrConnectWithoutCollectionInputSchema } from './TradeOfferCreateOrConnectWithoutCollectionInputSchema';
import { TradeOfferUpsertWithoutCollectionInputSchema } from './TradeOfferUpsertWithoutCollectionInputSchema';
import { TradeOfferWhereInputSchema } from './TradeOfferWhereInputSchema';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';
import { TradeOfferUpdateToOneWithWhereWithoutCollectionInputSchema } from './TradeOfferUpdateToOneWithWhereWithoutCollectionInputSchema';
import { TradeOfferUpdateWithoutCollectionInputSchema } from './TradeOfferUpdateWithoutCollectionInputSchema';
import { TradeOfferUncheckedUpdateWithoutCollectionInputSchema } from './TradeOfferUncheckedUpdateWithoutCollectionInputSchema';

export const TradeOfferUpdateOneWithoutCollectionNestedInputSchema: z.ZodType<Prisma.TradeOfferUpdateOneWithoutCollectionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TradeOfferCreateWithoutCollectionInputSchema),
          z.lazy(() => TradeOfferUncheckedCreateWithoutCollectionInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TradeOfferCreateOrConnectWithoutCollectionInputSchema)
        .optional(),
      upsert: z
        .lazy(() => TradeOfferUpsertWithoutCollectionInputSchema)
        .optional(),
      disconnect: z
        .union([z.boolean(), z.lazy(() => TradeOfferWhereInputSchema)])
        .optional(),
      delete: z
        .union([z.boolean(), z.lazy(() => TradeOfferWhereInputSchema)])
        .optional(),
      connect: z.lazy(() => TradeOfferWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => TradeOfferUpdateToOneWithWhereWithoutCollectionInputSchema,
          ),
          z.lazy(() => TradeOfferUpdateWithoutCollectionInputSchema),
          z.lazy(() => TradeOfferUncheckedUpdateWithoutCollectionInputSchema),
        ])
        .optional(),
    })
    .strict();

export default TradeOfferUpdateOneWithoutCollectionNestedInputSchema;
