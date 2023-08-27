import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { CollectionItemSelectSchema } from '../inputTypeSchemas/CollectionItemSelectSchema';
import { CollectionItemIncludeSchema } from '../inputTypeSchemas/CollectionItemIncludeSchema';

export const CollectionItemArgsSchema: z.ZodType<Prisma.CollectionItemArgs> = z
  .object({
    select: z.lazy(() => CollectionItemSelectSchema).optional(),
    include: z.lazy(() => CollectionItemIncludeSchema).optional(),
  })
  .strict();

export default CollectionItemArgsSchema;
