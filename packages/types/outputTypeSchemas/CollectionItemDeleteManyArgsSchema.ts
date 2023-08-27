import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemWhereInputSchema } from '../inputTypeSchemas/CollectionItemWhereInputSchema';

export const CollectionItemDeleteManyArgsSchema: z.ZodType<Prisma.CollectionItemDeleteManyArgs> =
  z
    .object({
      where: CollectionItemWhereInputSchema.optional(),
    })
    .strict();

export default CollectionItemDeleteManyArgsSchema;
