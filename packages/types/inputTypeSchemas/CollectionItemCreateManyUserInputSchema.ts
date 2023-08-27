import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CollectionItemCreateManyUserInputSchema: z.ZodType<Prisma.CollectionItemCreateManyUserInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      comicId: z.number(),
      title: z.string(),
      imageUrl: z.string(),
      issueNumber: z.number(),
      tradeOfferId: z.string().optional().nullable(),
    })
    .strict();

export default CollectionItemCreateManyUserInputSchema;
