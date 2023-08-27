import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CollectionItemComicIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.CollectionItemComicIdUserIdCompoundUniqueInput> =
  z
    .object({
      comicId: z.number(),
      userId: z.string(),
    })
    .strict();

export default CollectionItemComicIdUserIdCompoundUniqueInputSchema;
