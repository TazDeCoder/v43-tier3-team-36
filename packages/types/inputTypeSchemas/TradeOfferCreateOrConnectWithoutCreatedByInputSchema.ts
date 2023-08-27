import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereUniqueInputSchema } from './TradeOfferWhereUniqueInputSchema';
import { TradeOfferCreateWithoutCreatedByInputSchema } from './TradeOfferCreateWithoutCreatedByInputSchema';
import { TradeOfferUncheckedCreateWithoutCreatedByInputSchema } from './TradeOfferUncheckedCreateWithoutCreatedByInputSchema';

export const TradeOfferCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.TradeOfferCreateOrConnectWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TradeOfferCreateWithoutCreatedByInputSchema),
        z.lazy(() => TradeOfferUncheckedCreateWithoutCreatedByInputSchema),
      ]),
    })
    .strict();

export default TradeOfferCreateOrConnectWithoutCreatedByInputSchema;
