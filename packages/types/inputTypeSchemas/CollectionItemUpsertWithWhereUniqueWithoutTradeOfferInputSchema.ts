import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemWhereUniqueInputSchema } from './CollectionItemWhereUniqueInputSchema';
import { CollectionItemUpdateWithoutTradeOfferInputSchema } from './CollectionItemUpdateWithoutTradeOfferInputSchema';
import { CollectionItemUncheckedUpdateWithoutTradeOfferInputSchema } from './CollectionItemUncheckedUpdateWithoutTradeOfferInputSchema';
import { CollectionItemCreateWithoutTradeOfferInputSchema } from './CollectionItemCreateWithoutTradeOfferInputSchema';
import { CollectionItemUncheckedCreateWithoutTradeOfferInputSchema } from './CollectionItemUncheckedCreateWithoutTradeOfferInputSchema';

export const CollectionItemUpsertWithWhereUniqueWithoutTradeOfferInputSchema: z.ZodType<Prisma.CollectionItemUpsertWithWhereUniqueWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => CollectionItemWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => CollectionItemUpdateWithoutTradeOfferInputSchema),
        z.lazy(() => CollectionItemUncheckedUpdateWithoutTradeOfferInputSchema),
      ]),
      create: z.union([
        z.lazy(() => CollectionItemCreateWithoutTradeOfferInputSchema),
        z.lazy(() => CollectionItemUncheckedCreateWithoutTradeOfferInputSchema),
      ]),
    })
    .strict();

export default CollectionItemUpsertWithWhereUniqueWithoutTradeOfferInputSchema;
