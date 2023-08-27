import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestWhereUniqueInputSchema } from './TradeRequestWhereUniqueInputSchema';
import { TradeRequestCreateWithoutTradeOfferInputSchema } from './TradeRequestCreateWithoutTradeOfferInputSchema';
import { TradeRequestUncheckedCreateWithoutTradeOfferInputSchema } from './TradeRequestUncheckedCreateWithoutTradeOfferInputSchema';

export const TradeRequestCreateOrConnectWithoutTradeOfferInputSchema: z.ZodType<Prisma.TradeRequestCreateOrConnectWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => TradeRequestWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TradeRequestCreateWithoutTradeOfferInputSchema),
        z.lazy(() => TradeRequestUncheckedCreateWithoutTradeOfferInputSchema),
      ]),
    })
    .strict();

export default TradeRequestCreateOrConnectWithoutTradeOfferInputSchema;
