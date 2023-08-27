import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemWhereUniqueInputSchema } from './CollectionItemWhereUniqueInputSchema';
import { CollectionItemCreateWithoutTradeOfferInputSchema } from './CollectionItemCreateWithoutTradeOfferInputSchema';
import { CollectionItemUncheckedCreateWithoutTradeOfferInputSchema } from './CollectionItemUncheckedCreateWithoutTradeOfferInputSchema';

export const CollectionItemCreateOrConnectWithoutTradeOfferInputSchema: z.ZodType<Prisma.CollectionItemCreateOrConnectWithoutTradeOfferInput> =
  z
    .object({
      where: z.lazy(() => CollectionItemWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => CollectionItemCreateWithoutTradeOfferInputSchema),
        z.lazy(() => CollectionItemUncheckedCreateWithoutTradeOfferInputSchema),
      ]),
    })
    .strict();

export default CollectionItemCreateOrConnectWithoutTradeOfferInputSchema;
