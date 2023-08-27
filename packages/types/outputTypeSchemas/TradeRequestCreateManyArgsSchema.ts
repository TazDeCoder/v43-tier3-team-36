import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestCreateManyInputSchema } from '../inputTypeSchemas/TradeRequestCreateManyInputSchema';

export const TradeRequestCreateManyArgsSchema: z.ZodType<Prisma.TradeRequestCreateManyArgs> =
  z
    .object({
      data: z.union([
        TradeRequestCreateManyInputSchema,
        TradeRequestCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default TradeRequestCreateManyArgsSchema;
