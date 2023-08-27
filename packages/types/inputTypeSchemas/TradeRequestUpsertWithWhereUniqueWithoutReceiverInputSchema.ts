import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestWhereUniqueInputSchema } from './TradeRequestWhereUniqueInputSchema';
import { TradeRequestUpdateWithoutReceiverInputSchema } from './TradeRequestUpdateWithoutReceiverInputSchema';
import { TradeRequestUncheckedUpdateWithoutReceiverInputSchema } from './TradeRequestUncheckedUpdateWithoutReceiverInputSchema';
import { TradeRequestCreateWithoutReceiverInputSchema } from './TradeRequestCreateWithoutReceiverInputSchema';
import { TradeRequestUncheckedCreateWithoutReceiverInputSchema } from './TradeRequestUncheckedCreateWithoutReceiverInputSchema';

export const TradeRequestUpsertWithWhereUniqueWithoutReceiverInputSchema: z.ZodType<Prisma.TradeRequestUpsertWithWhereUniqueWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => TradeRequestWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => TradeRequestUpdateWithoutReceiverInputSchema),
        z.lazy(() => TradeRequestUncheckedUpdateWithoutReceiverInputSchema),
      ]),
      create: z.union([
        z.lazy(() => TradeRequestCreateWithoutReceiverInputSchema),
        z.lazy(() => TradeRequestUncheckedCreateWithoutReceiverInputSchema),
      ]),
    })
    .strict();

export default TradeRequestUpsertWithWhereUniqueWithoutReceiverInputSchema;
