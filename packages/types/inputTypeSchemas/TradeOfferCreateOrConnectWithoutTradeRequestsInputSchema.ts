import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';
import { TradeOfferCreateWithoutTradeRequestsInputSchema } from './TradeOfferCreateWithoutTradeRequestsInputSchema';
import { TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema } from './TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema';

export const TradeOfferCreateOrConnectWithoutTradeRequestsInputSchema: z.ZodType<Prisma.TradeOfferCreateOrConnectWithoutTradeRequestsInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TradeOfferCreateWithoutTradeRequestsInputSchema),
        z.lazy(() => TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema),
      ]),
    })
    .strict();

export default TradeOfferCreateOrConnectWithoutTradeRequestsInputSchema;
