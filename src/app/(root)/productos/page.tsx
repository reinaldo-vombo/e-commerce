import ProductsScreen from "@/components/layout/ProductsScreen";
import { Suspense } from "react";


export default function AllProducts() {
   return (
      <Suspense fallback={<div>Loading cart...</div>}>
         <ProductsScreen />
      </Suspense>
   );
}
