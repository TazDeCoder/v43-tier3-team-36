import { z } from 'zod';
import { type Prisma } from '@prisma/client';
import { TradeRequestSelectSchema } from '../inputTypeSchemas/TradeRequestSelectSchema';
import { TradeRequestIncludeSchema } from '../inputTypeSchemas/TradeRequestIncludeSchema';

export const TradeRequestArgsSchema: z.ZodType<Prisma.TradeRequestArgs> = z
  .object({
    select: z.lazy(() => TradeRequestSelectSchema).optional(),
    include: z.lazy(() => TradeRequestIncludeSchema).optional(),
  })
  .strict();

export default TradeRequestArgsSchema;
