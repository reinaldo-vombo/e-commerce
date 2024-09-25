import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  description: z.string().optional(),
  details: z.string().optional(), // Make optional if not required
  price: z.number().min(0, {
    message: 'Price must be a positive number.',
  }),
  priceDiscount: z.number().optional(), // Optional for discounts
  pricePercentage: z.number().optional(),
  brand: z.string().min(1, {
    message: 'Selecione uma marca',
  }),
  category: z.string().min(1, {
    message: 'Selecione uma categoria',
  }),
  gender: z.string().min(1, {
    message: 'Selecione uma género',
  }),
  image: z.array(z.instanceof(File)).nonempty({
    message: 'Deve carregar uma imagem',
  }),
  colors: z.array(
    z.object({
      color: z.string().min(1, { message: 'Cor é obrigatória' }), // Ensure color is a non-empty string
      images: z.array(z.instanceof(File)).optional(),
    })
  ),
  type: z.string().min(1, { message: 'Tipo é obrigatório' }), // Type (e.g., shoe or clothing)
  sizes: z
    .array(z.number().min(1, { message: 'Tamanho é obrigatório' }))
    .optional(),
});
