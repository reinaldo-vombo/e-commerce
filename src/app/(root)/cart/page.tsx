
import CartPage from '@/components/layout/CartPage'
import { Suspense } from 'react';

export default function page() {

   return (
      <Suspense fallback={<div>Loading cart...</div>}>
         <CartPage />
      </Suspense>
   );
}
