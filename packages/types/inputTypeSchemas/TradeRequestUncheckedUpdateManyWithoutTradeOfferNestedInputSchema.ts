import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestCreateWithoutTradeOfferInputSchema } from './TradeRequestCreateWithoutTradeOfferInputSchema';
import { TradeRequestUncheckedCreateWithoutTradeOfferInputSchema } from './TradeRequestUncheckedCreateWithoutTradeOfferInputSchema';
import { TradeRequestCreateOrConnectWithoutTradeOfferInputSchema } from './TradeRequestCreateOrConnectWithoutTradeOfferInputSchema';
import { TradeRequestUpsertWithWhereUniqueWithoutTradeOfferInputSchema } from './TradeRequestUpsertWithWhereUniqueWithoutTradeOfferInputSchema';
import { TradeRequestCreateManyTradeOfferInputEnvelopeSchema } from './TradeRequestCreateManyTradeOfferInputEnvelopeSchema';
import { TradeRequestWhereUniqueInputSchema } from './TradeRequestWhereUniqueInputSchema';
import { TradeRequestUpdateWithWhereUniqueWithoutTradeOfferInputSchema } from './TradeRequestUpdateWithWhereUniqueWithoutTradeOfferInputSchema';
import { TradeRequestUpdateManyWithWhereWithoutTradeOfferInputSchema } from './TradeRequestUpdateManyWithWhereWithoutTradeOfferInputSchema';
import { TradeRequestScalarWhereInputSchema } from './TradeRequestScalarWhereInputSchema';

export const TradeRequestUncheckedUpdateManyWithoutTradeOfferNestedInputSchema: z.ZodType<Prisma.TradeRequestUncheckedUpdateManyWithoutTradeOfferNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => TradeRequestUpsertWithWhereUniqueWithoutTradeOfferInputSchema,
          ),
          z
            .lazy(
              () =>
                TradeRequestUpsertWithWhereUniqueWithoutTradeOfferInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TradeRequestCreateManyTradeOfferInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TradeRequestWhereUniqueInputSchema),
          z.lazy(() => TradeRequestWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TradeRequestWhereUniqueInputSchema),
          z.lazy(() => TradeRequestWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TradeRequestWhereUniqueInputSchema),
          z.lazy(() => TradeRequestWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TradeRequestWhereUniqueInputSchema),
          z.lazy(() => TradeRequestWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => TradeRequestUpdateWithWhereUniqueWithoutTradeOfferInputSchema,
          ),
          z
            .lazy(
              () =>
                TradeRequestUpdateWithWhereUniqueWithoutTradeOfferInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TradeRequestUpdateManyWithWhereWithoutTradeOfferInputSchema,
          ),
          z
            .lazy(
              () => TradeRequestUpdateManyWithWhereWithoutTradeOfferInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TradeRequestScalarWhereInputSchema),
          z.lazy(() => TradeRequestScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default TradeRequestUncheckedUpdateManyWithoutTradeOfferNestedInputSchema;
