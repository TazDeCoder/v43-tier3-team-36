import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferStatusSchema } from './TradeOfferStatusSchema';

export const EnumTradeOfferStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTradeOfferStatusFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => TradeOfferStatusSchema).optional(),
    })
    .strict();

export default EnumTradeOfferStatusFieldUpdateOperationsInputSchema;
