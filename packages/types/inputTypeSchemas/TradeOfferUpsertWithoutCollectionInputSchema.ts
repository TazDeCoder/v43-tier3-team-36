import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferUpdateWithoutCollectionInputSchema } from './TradeOfferUpdateWithoutCollectionInputSchema';
import { TradeOfferUncheckedUpdateWithoutCollectionInputSchema } from './TradeOfferUncheckedUpdateWithoutCollectionInputSchema';
import { TradeOfferCreateWithoutCollectionInputSchema } from './TradeOfferCreateWithoutCollectionInputSchema';
import { TradeOfferUncheckedCreateWithoutCollectionInputSchema } from './TradeOfferUncheckedCreateWithoutCollectionInputSchema';
import { TradeOfferWhereInputSchema } from './TradeOfferWhereInputSchema';

export const TradeOfferUpsertWithoutCollectionInputSchema: z.ZodType<Prisma.TradeOfferUpsertWithoutCollectionInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => TradeOfferUpdateWithoutCollectionInputSchema),
        z.lazy(() => TradeOfferUncheckedUpdateWithoutCollectionInputSchema),
      ]),
      create: z.union([
        z.lazy(() => TradeOfferCreateWithoutCollectionInputSchema),
        z.lazy(() => TradeOfferUncheckedCreateWithoutCollectionInputSchema),
      ]),
      where: z.lazy(() => TradeOfferWhereInputSchema).optional(),
    })
    .strict();

export default TradeOfferUpsertWithoutCollectionInputSchema;
