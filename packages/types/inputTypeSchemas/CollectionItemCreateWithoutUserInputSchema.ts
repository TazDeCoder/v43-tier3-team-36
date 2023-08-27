import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferCreateNestedOneWithoutCollectionInputSchema } from './TradeOfferCreateNestedOneWithoutCollectionInputSchema';

export const CollectionItemCreateWithoutUserInputSchema: z.ZodType<Prisma.CollectionItemCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      comicId: z.number(),
      title: z.string(),
      imageUrl: z.string(),
      issueNumber: z.number(),
      TradeOffer: z
        .lazy(() => TradeOfferCreateNestedOneWithoutCollectionInputSchema)
        .optional(),
    })
    .strict();

export default CollectionItemCreateWithoutUserInputSchema;
