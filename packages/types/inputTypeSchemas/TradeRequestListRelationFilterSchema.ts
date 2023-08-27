import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestWhereInputSchema } from './TradeRequestWhereInputSchema';

export const TradeRequestListRelationFilterSchema: z.ZodType<Prisma.TradeRequestListRelationFilter> =
  z
    .object({
      every: z.lazy(() => TradeRequestWhereInputSchema).optional(),
      some: z.lazy(() => TradeRequestWhereInputSchema).optional(),
      none: z.lazy(() => TradeRequestWhereInputSchema).optional(),
    })
    .strict();

export default TradeRequestListRelationFilterSchema;
