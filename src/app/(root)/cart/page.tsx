
import CartPage from '@/components/layout/CartPage'
import CartMobilePage from '@/components/mobile/layout/Cart';
import { Suspense } from 'react';

export default function page() {

   return (
      <Suspense fallback={<div>Loading cart...</div>}>
         <CartPage />
         <CartMobilePage />
      </Suspense>
   );
}
