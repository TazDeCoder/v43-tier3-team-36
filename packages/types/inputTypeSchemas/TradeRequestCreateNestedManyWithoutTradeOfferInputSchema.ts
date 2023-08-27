import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestCreateWithoutTradeOfferInputSchema } from './TradeRequestCreateWithoutTradeOfferInputSchema';
import { TradeRequestUncheckedCreateWithoutTradeOfferInputSchema } from './TradeRequestUncheckedCreateWithoutTradeOfferInputSchema';
import { TradeRequestCreateOrConnectWithoutTradeOfferInputSchema } from './TradeRequestCreateOrConnectWithoutTradeOfferInputSchema';
import { TradeRequestCreateManyTradeOfferInputEnvelopeSchema } from './TradeRequestCreateManyTradeOfferInputEnvelopeSchema';
import { TradeRequestWhereUniqueInputSchema } from './TradeRequestWhereUniqueInputSchema';

export const TradeRequestCreateNestedManyWithoutTradeOfferInputSchema: z.ZodType<Prisma.TradeRequestCreateNestedManyWithoutTradeOfferInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TradeRequestCreateWithoutTradeOfferInputSchema),
          z.lazy(() => TradeRequestCreateWithoutTradeOfferInputSchema).array(),
          z.lazy(() => TradeRequestUncheckedCreateWithoutTradeOfferInputSchema),
          z
            .lazy(() => TradeRequestUncheckedCreateWithoutTradeOfferInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TradeRequestCreateOrConnectWithoutTradeOfferInputSchema),
          z
            .lazy(() => TradeRequestCreateOrConnectWithoutTradeOfferInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TradeRequestCreateManyTradeOfferInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TradeRequestWhereUniqueInputSchema),
          z.lazy(() => TradeRequestWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default TradeRequestCreateNestedManyWithoutTradeOfferInputSchema;
