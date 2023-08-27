import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestWhereUniqueInputSchema } from './TradeRequestWhereUniqueInputSchema';
import { TradeRequestCreateWithoutReceiverInputSchema } from './TradeRequestCreateWithoutReceiverInputSchema';
import { TradeRequestUncheckedCreateWithoutReceiverInputSchema } from './TradeRequestUncheckedCreateWithoutReceiverInputSchema';

export const TradeRequestCreateOrConnectWithoutReceiverInputSchema: z.ZodType<Prisma.TradeRequestCreateOrConnectWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => TradeRequestWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TradeRequestCreateWithoutReceiverInputSchema),
        z.lazy(() => TradeRequestUncheckedCreateWithoutReceiverInputSchema),
      ]),
    })
    .strict();

export default TradeRequestCreateOrConnectWithoutReceiverInputSchema;
