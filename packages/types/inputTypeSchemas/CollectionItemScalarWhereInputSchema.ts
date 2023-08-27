import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const CollectionItemScalarWhereInputSchema: z.ZodType<Prisma.CollectionItemScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => CollectionItemScalarWhereInputSchema),
          z.lazy(() => CollectionItemScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CollectionItemScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => CollectionItemScalarWhereInputSchema),
          z.lazy(() => CollectionItemScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      comicId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      imageUrl: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      issueNumber: z
        .union([z.lazy(() => IntFilterSchema), z.number()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      tradeOfferId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
    })
    .strict();

export default CollectionItemScalarWhereInputSchema;
