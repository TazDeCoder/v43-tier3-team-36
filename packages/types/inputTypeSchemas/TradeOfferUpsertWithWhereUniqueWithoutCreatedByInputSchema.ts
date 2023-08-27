import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';
import { TradeOfferUpdateWithoutCreatedByInputSchema } from './TradeOfferUpdateWithoutCreatedByInputSchema';
import { TradeOfferUncheckedUpdateWithoutCreatedByInputSchema } from './TradeOfferUncheckedUpdateWithoutCreatedByInputSchema';
import { TradeOfferCreateWithoutCreatedByInputSchema } from './TradeOfferCreateWithoutCreatedByInputSchema';
import { TradeOfferUncheckedCreateWithoutCreatedByInputSchema } from './TradeOfferUncheckedCreateWithoutCreatedByInputSchema';

export const TradeOfferUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.TradeOfferUpsertWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => TradeOfferUpdateWithoutCreatedByInputSchema),
        z.lazy(() => TradeOfferUncheckedUpdateWithoutCreatedByInputSchema),
      ]),
      create: z.union([
        z.lazy(() => TradeOfferCreateWithoutCreatedByInputSchema),
        z.lazy(() => TradeOfferUncheckedCreateWithoutCreatedByInputSchema),
      ]),
    })
    .strict();

export default TradeOfferUpsertWithWhereUniqueWithoutCreatedByInputSchema;
