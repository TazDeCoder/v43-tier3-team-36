import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestScalarWhereInputSchema } from './TradeRequestScalarWhereInputSchema';
import { TradeRequestUpdateManyMutationInputSchema } from './TradeRequestUpdateManyMutationInputSchema';
import { TradeRequestUncheckedUpdateManyWithoutReceiverInputSchema } from './TradeRequestUncheckedUpdateManyWithoutReceiverInputSchema';

export const TradeRequestUpdateManyWithWhereWithoutReceiverInputSchema: z.ZodType<Prisma.TradeRequestUpdateManyWithWhereWithoutReceiverInput> =
  z
    .object({
      where: z.lazy(() => TradeRequestScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => TradeRequestUpdateManyMutationInputSchema),
        z.lazy(() => TradeRequestUncheckedUpdateManyWithoutReceiverInputSchema),
      ]),
    })
    .strict();

export default TradeRequestUpdateManyWithWhereWithoutReceiverInputSchema;
