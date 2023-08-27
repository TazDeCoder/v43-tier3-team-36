import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutCollectionInputSchema } from './UserCreateNestedOneWithoutCollectionInputSchema';
import { TradeOfferCreateNestedOneWithoutCollectionInputSchema } from './TradeOfferCreateNestedOneWithoutCollectionInputSchema';

export const CollectionItemCreateInputSchema: z.ZodType<Prisma.CollectionItemCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      comicId: z.number().int(),
      title: z.string(),
      imageUrl: z.string(),
      issueNumber: z.number().int(),
      user: z
        .lazy(() => UserCreateNestedOneWithoutCollectionInputSchema)
        .optional(),
      TradeOffer: z
        .lazy(() => TradeOfferCreateNestedOneWithoutCollectionInputSchema)
        .optional(),
    })
    .strict();

export default CollectionItemCreateInputSchema;
