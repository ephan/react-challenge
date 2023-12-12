import { z } from 'zod';

export const productSchema = z.object({
  brand: z.string(),
  category: z.string(),
  description: z.string(),
  discountPercentage: z.number(), // Corrected type from string to number
  id: z.number(),
  images: z.string().array(),
  price: z.number(),
  rating: z.number(),
  stock: z.number(),
  thumbnail: z.string(),
  title: z.string(),
});
