
import SigleProduct from "@/components/layout/SigleProduct";
import MobileSingleProduct from "@/components/mobile/layout/MobileSingleProduct";
import { PRODUCTS } from "@/constant/site-content";
import { Fragment } from "react";
type TSearchParams = {
   params: { id: string }
   searchParams?: { [key: string]: string | string[] | undefined }
}
export default function page({ params }: TSearchParams) {
   const id = params.id
   const product = PRODUCTS.find((product) => product.id === id)

   if (!product) {
      return 'loading...'
   }
   return (
      <Fragment>
         <SigleProduct product={product} />
      </Fragment>
   )
}
