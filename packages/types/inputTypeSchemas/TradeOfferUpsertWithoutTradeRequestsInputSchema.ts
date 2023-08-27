import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferUpdateWithoutTradeRequestsInputSchema } from './TradeOfferUpdateWithoutTradeRequestsInputSchema';
import { TradeOfferUncheckedUpdateWithoutTradeRequestsInputSchema } from './TradeOfferUncheckedUpdateWithoutTradeRequestsInputSchema';
import { TradeOfferCreateWithoutTradeRequestsInputSchema } from './TradeOfferCreateWithoutTradeRequestsInputSchema';
import { TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema } from './TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema';
import { TradeOfferWhereInputSchema } from './TradeOfferWhereInputSchema';

export const TradeOfferUpsertWithoutTradeRequestsInputSchema: z.ZodType<Prisma.TradeOfferUpsertWithoutTradeRequestsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => TradeOfferUpdateWithoutTradeRequestsInputSchema),
        z.lazy(() => TradeOfferUncheckedUpdateWithoutTradeRequestsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => TradeOfferCreateWithoutTradeRequestsInputSchema),
        z.lazy(() => TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema),
      ]),
      where: z.lazy(() => TradeOfferWhereInputSchema).optional(),
    })
    .strict();

export default TradeOfferUpsertWithoutTradeRequestsInputSchema;
