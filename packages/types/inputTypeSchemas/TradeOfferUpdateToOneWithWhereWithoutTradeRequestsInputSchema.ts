import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereInputSchema } from './TradeOfferWhereInputSchema';
import { TradeOfferUpdateWithoutTradeRequestsInputSchema } from './TradeOfferUpdateWithoutTradeRequestsInputSchema';
import { TradeOfferUncheckedUpdateWithoutTradeRequestsInputSchema } from './TradeOfferUncheckedUpdateWithoutTradeRequestsInputSchema';

export const TradeOfferUpdateToOneWithWhereWithoutTradeRequestsInputSchema: z.ZodType<Prisma.TradeOfferUpdateToOneWithWhereWithoutTradeRequestsInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => TradeOfferUpdateWithoutTradeRequestsInputSchema),
        z.lazy(() => TradeOfferUncheckedUpdateWithoutTradeRequestsInputSchema),
      ]),
    })
    .strict();

export default TradeOfferUpdateToOneWithWhereWithoutTradeRequestsInputSchema;
