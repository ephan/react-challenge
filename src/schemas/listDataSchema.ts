import { z } from 'zod';
import { productSchema } from './productSchema';

export const listDataSchema = z.object({
  products: productSchema.array(),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});
