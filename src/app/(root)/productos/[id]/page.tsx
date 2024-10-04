
import SigleProduct from "@/components/layout/SigleProduct";
import { PRODUCTS } from "@/constant/site-content";
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
   return <SigleProduct product={product} />
}
