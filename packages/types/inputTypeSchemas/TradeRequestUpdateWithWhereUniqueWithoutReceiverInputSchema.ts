import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestWhereUniqueInputSchema } from './TradeRequestWhereUniqueInputSchema';
import { TradeRequestUpdateWithoutReceiverInputSchema } from './TradeRequestUpdateWithoutReceiverInputSchema';
import { TradeRequestUncheckedUpdateWithoutReceiverInputSchema } from './TradeRequestUncheckedUpdateWithoutReceiverInputSchema';

export const TradeRequestUpdateWithWhereUniqueWithoutReceiverInputSchema: z.ZodType<Prisma.TradeRequestUpdateWithWhereUniqueWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => TradeRequestWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => TradeRequestUpdateWithoutReceiverInputSchema),
        z.lazy(() => TradeRequestUncheckedUpdateWithoutReceiverInputSchema),
      ]),
    })
    .strict();

export default TradeRequestUpdateWithWhereUniqueWithoutReceiverInputSchema;
