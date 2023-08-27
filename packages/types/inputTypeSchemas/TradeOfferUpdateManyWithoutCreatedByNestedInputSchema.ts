import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferCreateWithoutCreatedByInputSchema } from './TradeOfferCreateWithoutCreatedByInputSchema';
import { TradeOfferUncheckedCreateWithoutCreatedByInputSchema } from './TradeOfferUncheckedCreateWithoutCreatedByInputSchema';
import { TradeOfferCreateOrConnectWithoutCreatedByInputSchema } from './TradeOfferCreateOrConnectWithoutCreatedByInputSchema';
import { TradeOfferUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './TradeOfferUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { TradeOfferCreateManyCreatedByInputEnvelopeSchema } from './TradeOfferCreateManyCreatedByInputEnvelopeSchema';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';
import { TradeOfferUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './TradeOfferUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { TradeOfferUpdateManyWithWhereWithoutCreatedByInputSchema } from './TradeOfferUpdateManyWithWhereWithoutCreatedByInputSchema';
import { TradeOfferScalarWhereInputSchema } from './TradeOfferScalarWhereInputSchema';

export const TradeOfferUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.TradeOfferUpdateManyWithoutCreatedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TradeOfferCreateWithoutCreatedByInputSchema),
          z.lazy(() => TradeOfferCreateWithoutCreatedByInputSchema).array(),
          z.lazy(() => TradeOfferUncheckedCreateWithoutCreatedByInputSchema),
          z
            .lazy(() => TradeOfferUncheckedCreateWithoutCreatedByInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TradeOfferCreateOrConnectWithoutCreatedByInputSchema),
          z
            .lazy(() => TradeOfferCreateOrConnectWithoutCreatedByInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => TradeOfferUpsertWithWhereUniqueWithoutCreatedByInputSchema,
          ),
          z
            .lazy(
              () => TradeOfferUpsertWithWhereUniqueWithoutCreatedByInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TradeOfferCreateManyCreatedByInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TradeOfferWhereUniqueInputSchema),
          z.lazy(() => TradeOfferWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TradeOfferWhereUniqueInputSchema),
          z.lazy(() => TradeOfferWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TradeOfferWhereUniqueInputSchema),
          z.lazy(() => TradeOfferWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TradeOfferWhereUniqueInputSchema),
          z.lazy(() => TradeOfferWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => TradeOfferUpdateWithWhereUniqueWithoutCreatedByInputSchema,
          ),
          z
            .lazy(
              () => TradeOfferUpdateWithWhereUniqueWithoutCreatedByInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TradeOfferUpdateManyWithWhereWithoutCreatedByInputSchema,
          ),
          z
            .lazy(
              () => TradeOfferUpdateManyWithWhereWithoutCreatedByInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TradeOfferScalarWhereInputSchema),
          z.lazy(() => TradeOfferScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default TradeOfferUpdateManyWithoutCreatedByNestedInputSchema;
