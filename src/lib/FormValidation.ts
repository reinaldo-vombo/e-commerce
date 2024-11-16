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
  status: z.string().optional(),
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
export const logninSchema = z.object({
  email: z.string().email({ message: 'Email invalido' }).min(1, {
    message: 'Email é obrigatório',
  }),
  password: z.string().min(5, {
    message: 'Palavra-passe tem que conter no minimo 5 cararteres',
  }),
});
export const signinSchema = z.object({
  name: z.string().min(4, {
    message: 'nome deve conter no minimo 5 cararteres',
  }),
  email: z.string().email({ message: 'Email invalido' }).min(1, {
    message: 'Email é obrigatório',
  }),
  password: z.string().min(5, {
    message: 'Palavra-passe deve conter no minimo 5 cararteres',
  }),
  confirmPassword: z.string().min(5, {
    message: 'Palavra-passe deve conter no minimo 5 cararteres',
  }),
});
export const recoverPasswordSchema = z.object({
  email: z.string().email({ message: 'Email invalido' }).min(1, {
    message: 'Email é obrigatório',
  }),
});
export const resetPasswordSchema = z.object({
  token: z.string().min(1, {
    message: 'Token é obrigatório',
  }),
  password: z.string().min(5, {
    message: 'Palavra-passe deve conter no minimo 5 cararteres',
  }),
  confirmPassword: z.string().min(5, {
    message: 'Palavra-passe deve conter no minimo 5 cararteres',
  }),
});
export const personalInfoSchema = z.object({
  avatar: z.string().optional(),
  name: z.string().min(5, {
    message: 'Nome deve conter no minimo 5 cararteres',
  }),
  email: z.string().email({ message: 'Email invalido' }).min(1, {
    message: 'Email é obrigatório',
  }),
  phone: z.number().optional(),
  address: z.string().min(1, {
    message: 'Endereço é obrigatório',
  }),
});
export const securityInfoSchema = z.object({
  currentPassword: z.string().min(1, {
    message: 'Palavra-passe deve conter no minimo 5 cararteres',
  }),
  newPassword: z.string().min(5, {
    message: 'Palavra-passe deve conter no minimo 5 cararteres',
  }),
  confirmPassword: z.string().min(1, {
    message: 'Palavra-passe deve conter no minimo 5 cararteres',
  }),
});
export const blogSchema = z.object({
  thumbNail: z.array(z.instanceof(File)).nonempty({
    message: 'Deve carregar uma imagem',
  }),
  title: z.string().min(1, {
    message: 'Blog deve conter titulo',
  }),
  description: z.string().min(40, {
    message: 'Descrição deve conter no minino 40 caractres',
  }),
  userId: z.string().min(1, {
    message: 'E necessario o id do utilizador',
  }),
  status: z.string().optional(),
});
export const userSchema = z.object({
  photo: z.array(z.instanceof(File)).nonempty({
    message: 'Deve carregar uma imagem',
  }),
  name: z.string().min(1, {
    message: 'Blog deve conter titulo',
  }),
  email: z.string().email(),
});
