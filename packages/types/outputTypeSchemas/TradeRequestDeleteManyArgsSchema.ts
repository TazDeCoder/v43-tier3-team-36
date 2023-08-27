import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestWhereInputSchema } from '../inputTypeSchemas/TradeRequestWhereInputSchema';

export const TradeRequestDeleteManyArgsSchema: z.ZodType<Prisma.TradeRequestDeleteManyArgs> =
  z
    .object({
      where: TradeRequestWhereInputSchema.optional(),
    })
    .strict();

export default TradeRequestDeleteManyArgsSchema;
