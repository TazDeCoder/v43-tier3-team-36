import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferScalarWhereInputSchema } from './TradeOfferScalarWhereInputSchema';
import { TradeOfferUpdateManyMutationInputSchema } from './TradeOfferUpdateManyMutationInputSchema';
import { TradeOfferUncheckedUpdateManyWithoutCreatedByInputSchema } from './TradeOfferUncheckedUpdateManyWithoutCreatedByInputSchema';

export const TradeOfferUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.TradeOfferUpdateManyWithWhereWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => TradeOfferUpdateManyMutationInputSchema),
        z.lazy(() => TradeOfferUncheckedUpdateManyWithoutCreatedByInputSchema),
      ]),
    })
    .strict();

export default TradeOfferUpdateManyWithWhereWithoutCreatedByInputSchema;
