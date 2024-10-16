import { Separator } from "@/components/ui/separator"
import { PRODUCTS } from "@/constant/site-content"
import { SalesChart } from "../chart/Sales";
import ProductSlider from "../product-inventory/ProductSlider";
import Reviews from "../product-inventory/Reviews";

const ProductDetails = () => {
   const product = PRODUCTS[0];
   const sizes = product.size.map(size => {
      return (<span key={size}>{size},</span>)
   })

   return (
      <div className="mt-8 w-[30rem]">
         <div className="space-y-5">
            <ProductSlider />
         </div>
         <div className="mt-4">
            <h2 className="h3-bold">{product.title}</h2>
            <Separator />
            <ul className="mt-4 space-y-3">
               <li className="flex items-center gap-1">
                  <b>Tipo:</b> Sapatilha
               </li>
               <li className="flex items-center gap-1">
                  <b>Categoria:</b> {product.category}
               </li>
               <li className="flex items-center gap-1">
                  <b>Genéro:</b> Homem
               </li>
               <li className="flex items-center gap-1">
                  <b>Tamanhos:</b> {sizes}
               </li>
            </ul>
            <div className="mt-4 space-y-5">
               <h2 className="h3-bold">Analiticys</h2>
               <Separator />
               <SalesChart className="max-w-[34rem]" />
            </div>
            <div className="mt-4 space-y-5">
               <h2 className="h3-bold">Conteúdo</h2>
               <Separator />
               <div className="space-y-3">
                  <h3 className="base-semibold">Descrição</h3>
                  <p className="line-clamp-4">{product.description}</p>
               </div>
               <div className="space-y-3">
                  <h3 className="base-semibold">Detalhes</h3>
                  <p className="line-clamp-4">{product.description}</p>
               </div>
               <Reviews />
            </div>
         </div>
      </div>
   )
}

export default ProductDetails;
