import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemWhereUniqueInputSchema } from './CollectionItemWhereUniqueInputSchema';
import { CollectionItemUpdateWithoutTradeOfferInputSchema } from './CollectionItemUpdateWithoutTradeOfferInputSchema';
import { CollectionItemUncheckedUpdateWithoutTradeOfferInputSchema } from './CollectionItemUncheckedUpdateWithoutTradeOfferInputSchema';

export const CollectionItemUpdateWithWhereUniqueWithoutTradeOfferInputSchema: z.ZodType<Prisma.CollectionItemUpdateWithWhereUniqueWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => CollectionItemWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => CollectionItemUpdateWithoutTradeOfferInputSchema),
        z.lazy(() => CollectionItemUncheckedUpdateWithoutTradeOfferInputSchema),
      ]),
    })
    .strict();

export default CollectionItemUpdateWithWhereUniqueWithoutTradeOfferInputSchema;
