import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferCreateWithoutTradeRequestsInputSchema } from './TradeOfferCreateWithoutTradeRequestsInputSchema';
import { TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema } from './TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema';
import { TradeOfferCreateOrConnectWithoutTradeRequestsInputSchema } from './TradeOfferCreateOrConnectWithoutTradeRequestsInputSchema';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';

export const TradeOfferCreateNestedOneWithoutTradeRequestsInputSchema: z.ZodType<Prisma.TradeOfferCreateNestedOneWithoutTradeRequestsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TradeOfferCreateWithoutTradeRequestsInputSchema),
          z.lazy(
            () => TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TradeOfferCreateOrConnectWithoutTradeRequestsInputSchema)
        .optional(),
      connect: z.lazy(() => TradeOfferWhereUniqueInputSchema).optional(),
    })
    .strict();

export default TradeOfferCreateNestedOneWithoutTradeRequestsInputSchema;
