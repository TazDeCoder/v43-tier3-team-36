import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestScalarWhereInputSchema } from './TradeRequestScalarWhereInputSchema';
import { TradeRequestUpdateManyMutationInputSchema } from './TradeRequestUpdateManyMutationInputSchema';
import { TradeRequestUncheckedUpdateManyWithoutTradeOfferInputSchema } from './TradeRequestUncheckedUpdateManyWithoutTradeOfferInputSchema';

export const TradeRequestUpdateManyWithWhereWithoutTradeOfferInputSchema: z.ZodType<Prisma.TradeRequestUpdateManyWithWhereWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => TradeRequestScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => TradeRequestUpdateManyMutationInputSchema),
        z.lazy(
          () => TradeRequestUncheckedUpdateManyWithoutTradeOfferInputSchema,
        ),
      ]),
    })
    .strict();

export default TradeRequestUpdateManyWithWhereWithoutTradeOfferInputSchema;
