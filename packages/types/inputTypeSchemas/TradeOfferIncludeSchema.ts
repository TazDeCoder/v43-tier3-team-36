import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema';
import { CollectionItemFindManyArgsSchema } from '../outputTypeSchemas/CollectionItemFindManyArgsSchema';
import { TradeRequestFindManyArgsSchema } from '../outputTypeSchemas/TradeRequestFindManyArgsSchema';
import { TradeOfferCountOutputTypeArgsSchema } from '../outputTypeSchemas/TradeOfferCountOutputTypeArgsSchema';

export const TradeOfferIncludeSchema: z.ZodType<Prisma.TradeOfferInclude> = z
  .object({
    createdBy: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    collection: z
      .union([z.boolean(), z.lazy(() => CollectionItemFindManyArgsSchema)])
      .optional(),
    TradeRequests: z
      .union([z.boolean(), z.lazy(() => TradeRequestFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TradeOfferCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export default TradeOfferIncludeSchema;
