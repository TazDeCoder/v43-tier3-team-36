import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollectionItemWhereInputSchema } from '../inputTypeSchemas/CollectionItemWhereInputSchema';
import { CollectionItemOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CollectionItemOrderByWithAggregationInputSchema';
import { CollectionItemScalarFieldEnumSchema } from '../inputTypeSchemas/CollectionItemScalarFieldEnumSchema';
import { CollectionItemScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CollectionItemScalarWhereWithAggregatesInputSchema';

export const CollectionItemGroupByArgsSchema: z.ZodType<Prisma.CollectionItemGroupByArgs> =
  z
    .object({
      where: CollectionItemWhereInputSchema.optional(),
      orderBy: z
        .union([
          CollectionItemOrderByWithAggregationInputSchema.array(),
          CollectionItemOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: CollectionItemScalarFieldEnumSchema.array(),
      having: CollectionItemScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export default CollectionItemGroupByArgsSchema;
