import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldRefInputSchema } from './StringFieldRefInputSchema';
import { ListStringFieldRefInputSchema } from './ListStringFieldRefInputSchema';

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    in: z
      .union([z.string().array(), z.lazy(() => ListStringFieldRefInputSchema)])
      .optional(),
    notIn: z
      .union([z.string().array(), z.lazy(() => ListStringFieldRefInputSchema)])
      .optional(),
    lt: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    lte: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    gt: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    gte: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    contains: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    startsWith: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    endsWith: z
      .union([z.string(), z.lazy(() => StringFieldRefInputSchema)])
      .optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export default NestedStringFilterSchema;
