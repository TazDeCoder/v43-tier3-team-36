import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferCreateWithoutCollectionInputSchema } from './TradeOfferCreateWithoutCollectionInputSchema';
import { TradeOfferUncheckedCreateWithoutCollectionInputSchema } from './TradeOfferUncheckedCreateWithoutCollectionInputSchema';
import { TradeOfferCreateOrConnectWithoutCollectionInputSchema } from './TradeOfferCreateOrConnectWithoutCollectionInputSchema';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';

export const TradeOfferCreateNestedOneWithoutCollectionInputSchema: z.ZodType<Prisma.TradeOfferCreateNestedOneWithoutCollectionInput> =
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
      connect: z.lazy(() => TradeOfferWhereUniqueInputSchema).optional(),
    })
    .strict();

export default TradeOfferCreateNestedOneWithoutCollectionInputSchema;
