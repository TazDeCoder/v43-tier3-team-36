import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferCreateWithoutTradeRequestsInputSchema } from './TradeOfferCreateWithoutTradeRequestsInputSchema';
import { TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema } from './TradeOfferUncheckedCreateWithoutTradeRequestsInputSchema';
import { TradeOfferCreateOrConnectWithoutTradeRequestsInputSchema } from './TradeOfferCreateOrConnectWithoutTradeRequestsInputSchema';
import { TradeOfferUpsertWithoutTradeRequestsInputSchema } from './TradeOfferUpsertWithoutTradeRequestsInputSchema';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';
import { TradeOfferUpdateToOneWithWhereWithoutTradeRequestsInputSchema } from './TradeOfferUpdateToOneWithWhereWithoutTradeRequestsInputSchema';
import { TradeOfferUpdateWithoutTradeRequestsInputSchema } from './TradeOfferUpdateWithoutTradeRequestsInputSchema';
import { TradeOfferUncheckedUpdateWithoutTradeRequestsInputSchema } from './TradeOfferUncheckedUpdateWithoutTradeRequestsInputSchema';

export const TradeOfferUpdateOneRequiredWithoutTradeRequestsNestedInputSchema: z.ZodType<Prisma.TradeOfferUpdateOneRequiredWithoutTradeRequestsNestedInput> =
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
      upsert: z
        .lazy(() => TradeOfferUpsertWithoutTradeRequestsInputSchema)
        .optional(),
      connect: z.lazy(() => TradeOfferWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => TradeOfferUpdateToOneWithWhereWithoutTradeRequestsInputSchema,
          ),
          z.lazy(() => TradeOfferUpdateWithoutTradeRequestsInputSchema),
          z.lazy(
            () => TradeOfferUncheckedUpdateWithoutTradeRequestsInputSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export default TradeOfferUpdateOneRequiredWithoutTradeRequestsNestedInputSchema;
