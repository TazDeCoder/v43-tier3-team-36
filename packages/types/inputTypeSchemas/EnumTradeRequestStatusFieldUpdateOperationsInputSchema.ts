import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';

export const EnumTradeRequestStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTradeRequestStatusFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => TradeRequestStatusSchema).optional(),
    })
    .strict();

export default EnumTradeRequestStatusFieldUpdateOperationsInputSchema;
