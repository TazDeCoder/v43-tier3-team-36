import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestCreateWithoutReceiverInputSchema } from './TradeRequestCreateWithoutReceiverInputSchema';
import { TradeRequestUncheckedCreateWithoutReceiverInputSchema } from './TradeRequestUncheckedCreateWithoutReceiverInputSchema';
import { TradeRequestCreateOrConnectWithoutReceiverInputSchema } from './TradeRequestCreateOrConnectWithoutReceiverInputSchema';
import { TradeRequestUpsertWithWhereUniqueWithoutReceiverInputSchema } from './TradeRequestUpsertWithWhereUniqueWithoutReceiverInputSchema';
import { TradeRequestCreateManyReceiverInputEnvelopeSchema } from './TradeRequestCreateManyReceiverInputEnvelopeSchema';
import { TradeRequestWhereUniqueInputSchema } from './TradeRequestWhereUniqueInputSchema';
import { TradeRequestUpdateWithWhereUniqueWithoutReceiverInputSchema } from './TradeRequestUpdateWithWhereUniqueWithoutReceiverInputSchema';
import { TradeRequestUpdateManyWithWhereWithoutReceiverInputSchema } from './TradeRequestUpdateManyWithWhereWithoutReceiverInputSchema';
import { TradeRequestScalarWhereInputSchema } from './TradeRequestScalarWhereInputSchema';

export const TradeRequestUpdateManyWithoutReceiverNestedInputSchema: z.ZodType<Prisma.TradeRequestUpdateManyWithoutReceiverNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TradeRequestCreateWithoutReceiverInputSchema),
          z.lazy(() => TradeRequestCreateWithoutReceiverInputSchema).array(),
          z.lazy(() => TradeRequestUncheckedCreateWithoutReceiverInputSchema),
          z
            .lazy(() => TradeRequestUncheckedCreateWithoutReceiverInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TradeRequestCreateOrConnectWithoutReceiverInputSchema),
          z
            .lazy(() => TradeRequestCreateOrConnectWithoutReceiverInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => TradeRequestUpsertWithWhereUniqueWithoutReceiverInputSchema,
          ),
          z
            .lazy(
              () => TradeRequestUpsertWithWhereUniqueWithoutReceiverInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TradeRequestCreateManyReceiverInputEnvelopeSchema)
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
            () => TradeRequestUpdateWithWhereUniqueWithoutReceiverInputSchema,
          ),
          z
            .lazy(
              () => TradeRequestUpdateWithWhereUniqueWithoutReceiverInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TradeRequestUpdateManyWithWhereWithoutReceiverInputSchema,
          ),
          z
            .lazy(
              () => TradeRequestUpdateManyWithWhereWithoutReceiverInputSchema,
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

export default TradeRequestUpdateManyWithoutReceiverNestedInputSchema;
