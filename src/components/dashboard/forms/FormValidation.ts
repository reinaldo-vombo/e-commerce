import { z } from 'zod';

export const productSchema = z.object({
  productName: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  description: z.string().max(40, {
    message: 'Description must be at most 40 characters.',
  }),
  details: z.string().optional(), // Make optional if not required
  price: z.number().min(0, {
    message: 'Price must be a positive number.',
  }),
  priceDiscount: z.number().optional(), // Optional for discounts
  pricePercentage: z.number().optional(),
  brand: z.string().min(1, {
    message: 'Brand is required.',
  }),
});
