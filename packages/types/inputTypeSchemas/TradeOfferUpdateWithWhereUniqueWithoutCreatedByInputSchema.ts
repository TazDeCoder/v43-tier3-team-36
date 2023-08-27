import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';
import { TradeOfferUpdateWithoutCreatedByInputSchema } from './TradeOfferUpdateWithoutCreatedByInputSchema';
import { TradeOfferUncheckedUpdateWithoutCreatedByInputSchema } from './TradeOfferUncheckedUpdateWithoutCreatedByInputSchema';

export const TradeOfferUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.TradeOfferUpdateWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => TradeOfferUpdateWithoutCreatedByInputSchema),
        z.lazy(() => TradeOfferUncheckedUpdateWithoutCreatedByInputSchema),
      ]),
    })
    .strict();

export default TradeOfferUpdateWithWhereUniqueWithoutCreatedByInputSchema;
