import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestIncludeSchema } from '../inputTypeSchemas/TradeRequestIncludeSchema';
import { TradeRequestWhereInputSchema } from '../inputTypeSchemas/TradeRequestWhereInputSchema';
import { TradeRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/TradeRequestOrderByWithRelationInputSchema';
import { TradeRequestWhereUniqueInputSchema } from '../inputTypeSchemas/TradeRequestWhereUniqueInputSchema';
import { TradeRequestScalarFieldEnumSchema } from '../inputTypeSchemas/TradeRequestScalarFieldEnumSchema';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';
import { TradeOfferArgsSchema } from '../outputTypeSchemas/TradeOfferArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TradeRequestSelectSchema: z.ZodType<Prisma.TradeRequestSelect> = z
  .object({
    id: z.boolean().optional(),
    receiverId: z.boolean().optional(),
    tradeOfferId: z.boolean().optional(),
    receiverComicId: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    receiver: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    TradeOffer: z
      .union([z.boolean(), z.lazy(() => TradeOfferArgsSchema)])
      .optional(),
  })
  .strict();

export const TradeRequestFindFirstArgsSchema: z.ZodType<Prisma.TradeRequestFindFirstArgs> =
  z
    .object({
      select: TradeRequestSelectSchema.optional(),
      include: TradeRequestIncludeSchema.optional(),
      where: TradeRequestWhereInputSchema.optional(),
      orderBy: z
        .union([
          TradeRequestOrderByWithRelationInputSchema.array(),
          TradeRequestOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TradeRequestWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          TradeRequestScalarFieldEnumSchema,
          TradeRequestScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default TradeRequestFindFirstArgsSchema;
