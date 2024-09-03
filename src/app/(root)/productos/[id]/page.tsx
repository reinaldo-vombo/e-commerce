
import SigleProduct from "@/components/layout/SigleProduct";
import Breadcrumbe from "@/components/shared/Breadcrumbe";
import ProductPreview from "@/components/shared/ProductPreview";
import { PRODUCTS } from "@/constant/site-content";
type TSeachParams = {
   params: { id: string }
   seachParams: { [key: string]: string | string[] | undefined }
}
export default function page({ params }: TSeachParams) {
   const id = params.id
   const product = PRODUCTS.find((product) => product.id === id)

   if (!product) {
      return 'loading...'
   }
   return <SigleProduct product={product} />
}
