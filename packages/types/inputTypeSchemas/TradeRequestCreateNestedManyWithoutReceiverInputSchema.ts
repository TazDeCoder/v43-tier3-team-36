import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestCreateWithoutReceiverInputSchema } from './TradeRequestCreateWithoutReceiverInputSchema';
import { TradeRequestUncheckedCreateWithoutReceiverInputSchema } from './TradeRequestUncheckedCreateWithoutReceiverInputSchema';
import { TradeRequestCreateOrConnectWithoutReceiverInputSchema } from './TradeRequestCreateOrConnectWithoutReceiverInputSchema';
import { TradeRequestCreateManyReceiverInputEnvelopeSchema } from './TradeRequestCreateManyReceiverInputEnvelopeSchema';
import { TradeRequestWhereUniqueInputSchema } from './TradeRequestWhereUniqueInputSchema';

export const TradeRequestCreateNestedManyWithoutReceiverInputSchema: z.ZodType<Prisma.TradeRequestCreateNestedManyWithoutReceiverInput> =
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
      createMany: z
        .lazy(() => TradeRequestCreateManyReceiverInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TradeRequestWhereUniqueInputSchema),
          z.lazy(() => TradeRequestWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export default TradeRequestCreateNestedManyWithoutReceiverInputSchema;
