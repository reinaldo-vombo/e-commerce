'use server';
import { CartItem } from '@/store/type';
import { cookies } from 'next/headers';

export async function updateCart(cart: CartItem[]) {
  const cartString = JSON.stringify(cart);

  // Set the cookie
  cookies().set('cart', cartString, {
    httpOnly: false, // Accessible via JavaScript
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 7 * 24 * 60 * 60, // 1 week
  });
}
export async function getCartFromCookies() {
  const cartCookie = cookies().get('cart')?.value;
  return cartCookie ? JSON.parse(cartCookie) : [];
}
