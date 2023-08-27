import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';
import { TradeOfferCreateWithoutCollectionInputSchema } from './TradeOfferCreateWithoutCollectionInputSchema';
import { TradeOfferUncheckedCreateWithoutCollectionInputSchema } from './TradeOfferUncheckedCreateWithoutCollectionInputSchema';

export const TradeOfferCreateOrConnectWithoutCollectionInputSchema: z.ZodType<Prisma.TradeOfferCreateOrConnectWithoutCollectionInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TradeOfferCreateWithoutCollectionInputSchema),
        z.lazy(() => TradeOfferUncheckedCreateWithoutCollectionInputSchema),
      ]),
    })
    .strict();

export default TradeOfferCreateOrConnectWithoutCollectionInputSchema;
