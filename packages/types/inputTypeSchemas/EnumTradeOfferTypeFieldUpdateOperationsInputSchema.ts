import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeOfferTypeSchema } from './TradeOfferTypeSchema';

export const EnumTradeOfferTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTradeOfferTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => TradeOfferTypeSchema).optional(),
    })
    .strict();

export default EnumTradeOfferTypeFieldUpdateOperationsInputSchema;
