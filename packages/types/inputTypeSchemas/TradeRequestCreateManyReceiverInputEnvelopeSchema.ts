import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TradeRequestCreateManyReceiverInputSchema } from './TradeRequestCreateManyReceiverInputSchema';

export const TradeRequestCreateManyReceiverInputEnvelopeSchema: z.ZodType<Prisma.TradeRequestCreateManyReceiverInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TradeRequestCreateManyReceiverInputSchema),
        z.lazy(() => TradeRequestCreateManyReceiverInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export default TradeRequestCreateManyReceiverInputEnvelopeSchema;
