import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/TradeRequestUpdateManyMutationInputSchema';
import { TradeRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TradeRequestUncheckedUpdateManyInputSchema';
import { TradeRequestWhereInputSchema } from '../inputTypeSchemas/TradeRequestWhereInputSchema';

export const TradeRequestUpdateManyArgsSchema: z.ZodType<Prisma.TradeRequestUpdateManyArgs> =
  z
    .object({
      data: z.union([
        TradeRequestUpdateManyMutationInputSchema,
        TradeRequestUncheckedUpdateManyInputSchema,
      ]),
      where: TradeRequestWhereInputSchema.optional(),
    })
    .strict();

export default TradeRequestUpdateManyArgsSchema;
