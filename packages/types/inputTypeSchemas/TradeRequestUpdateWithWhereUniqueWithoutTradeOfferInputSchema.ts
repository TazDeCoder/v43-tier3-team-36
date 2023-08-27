import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestWhereUniqueInputSchema } from './TradeRequestWhereUniqueInputSchema';
import { TradeRequestUpdateWithoutTradeOfferInputSchema } from './TradeRequestUpdateWithoutTradeOfferInputSchema';
import { TradeRequestUncheckedUpdateWithoutTradeOfferInputSchema } from './TradeRequestUncheckedUpdateWithoutTradeOfferInputSchema';

export const TradeRequestUpdateWithWhereUniqueWithoutTradeOfferInputSchema: z.ZodType<Prisma.TradeRequestUpdateWithWhereUniqueWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => TradeRequestWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => TradeRequestUpdateWithoutTradeOfferInputSchema),
        z.lazy(() => TradeRequestUncheckedUpdateWithoutTradeOfferInputSchema),
      ]),
    })
    .strict();

export default TradeRequestUpdateWithWhereUniqueWithoutTradeOfferInputSchema;
