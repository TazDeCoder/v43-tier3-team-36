import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestWhereUniqueInputSchema } from './TradeRequestWhereUniqueInputSchema';
import { TradeRequestUpdateWithoutTradeOfferInputSchema } from './TradeRequestUpdateWithoutTradeOfferInputSchema';
import { TradeRequestUncheckedUpdateWithoutTradeOfferInputSchema } from './TradeRequestUncheckedUpdateWithoutTradeOfferInputSchema';
import { TradeRequestCreateWithoutTradeOfferInputSchema } from './TradeRequestCreateWithoutTradeOfferInputSchema';
import { TradeRequestUncheckedCreateWithoutTradeOfferInputSchema } from './TradeRequestUncheckedCreateWithoutTradeOfferInputSchema';

export const TradeRequestUpsertWithWhereUniqueWithoutTradeOfferInputSchema: z.ZodType<Prisma.TradeRequestUpsertWithWhereUniqueWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => TradeRequestWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => TradeRequestUpdateWithoutTradeOfferInputSchema),
        z.lazy(() => TradeRequestUncheckedUpdateWithoutTradeOfferInputSchema),
      ]),
      create: z.union([
        z.lazy(() => TradeRequestCreateWithoutTradeOfferInputSchema),
        z.lazy(() => TradeRequestUncheckedCreateWithoutTradeOfferInputSchema),
      ]),
    })
    .strict();

export default TradeRequestUpsertWithWhereUniqueWithoutTradeOfferInputSchema;
