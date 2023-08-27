import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferWhereInputSchema } from './TradeOfferWhereInputSchema';
import { TradeOfferUpdateWithoutCollectionInputSchema } from './TradeOfferUpdateWithoutCollectionInputSchema';
import { TradeOfferUncheckedUpdateWithoutCollectionInputSchema } from './TradeOfferUncheckedUpdateWithoutCollectionInputSchema';

export const TradeOfferUpdateToOneWithWhereWithoutCollectionInputSchema: z.ZodType<Prisma.TradeOfferUpdateToOneWithWhereWithoutCollectionInput> =
  z
    .object({
      where: z.lazy(() => TradeOfferWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => TradeOfferUpdateWithoutCollectionInputSchema),
        z.lazy(() => TradeOfferUncheckedUpdateWithoutCollectionInputSchema),
      ]),
    })
    .strict();

export default TradeOfferUpdateToOneWithWhereWithoutCollectionInputSchema;
