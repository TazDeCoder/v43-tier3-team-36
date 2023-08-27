import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CollectionItemCreateManyTradeOfferInputSchema: z.ZodType<Prisma.CollectionItemCreateManyTradeOfferInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      comicId: z.number().int(),
      title: z.string(),
      imageUrl: z.string(),
      issueNumber: z.number().int(),
      userId: z.string().optional().nullable(),
    })
    .strict();

export default CollectionItemCreateManyTradeOfferInputSchema;
