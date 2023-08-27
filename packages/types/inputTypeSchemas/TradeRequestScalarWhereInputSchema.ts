import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { EnumTradeRequestStatusFilterSchema } from './EnumTradeRequestStatusFilterSchema';
import { TradeRequestStatusSchema } from './TradeRequestStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TradeRequestScalarWhereInputSchema: z.ZodType<Prisma.TradeRequestScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TradeRequestScalarWhereInputSchema),
          z.lazy(() => TradeRequestScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => TradeRequestScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TradeRequestScalarWhereInputSchema),
          z.lazy(() => TradeRequestScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      receiverId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      tradeOfferId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      receiverComicId: z
        .union([z.lazy(() => IntNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      status: z
        .union([
          z.lazy(() => EnumTradeRequestStatusFilterSchema),
          z.lazy(() => TradeRequestStatusSchema),
        ])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export default TradeRequestScalarWhereInputSchema;
