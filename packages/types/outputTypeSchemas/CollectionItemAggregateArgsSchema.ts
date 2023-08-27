import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemWhereInputSchema } from '../inputTypeSchemas/CollectionItemWhereInputSchema';
import { CollectionItemOrderByWithRelationInputSchema } from '../inputTypeSchemas/CollectionItemOrderByWithRelationInputSchema';
import { CollectionItemWhereUniqueInputSchema } from '../inputTypeSchemas/CollectionItemWhereUniqueInputSchema';

export const CollectionItemAggregateArgsSchema: z.ZodType<Prisma.CollectionItemAggregateArgs> =
  z
    .object({
      where: CollectionItemWhereInputSchema.optional(),
      orderBy: z
        .union([
          CollectionItemOrderByWithRelationInputSchema.array(),
          CollectionItemOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: CollectionItemWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default CollectionItemAggregateArgsSchema;
