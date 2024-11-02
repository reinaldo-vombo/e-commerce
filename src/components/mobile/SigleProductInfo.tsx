import { ConversLogo, NikeLogo } from "@/constant/svgIcons"
import { TProduct } from "../product/type"
import Stars from "../product/Stars"

type TSigleProduct = {
   product: TProduct
}

const SigleProductInfo = ({ product }: TSigleProduct) => {

   return (
      <div className="container mt-4">
         <div className="space-y-6">
            <div className="space-y-2">
               <h3 className="base-semibold">Tamanho</h3>
            </div>
            <div className="space-y-2">
               <h3 className="base-semibold">Descrição</h3>
               <p className="text-slate-500">{product.description}</p>
            </div>
            <div className="space-y-2">
               <h3 className="base-semibold">Detalhes</h3>
               <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic quasi veniam amet repellendus nulla optio alias. Pariatur deserunt doloribus, recusandae porro non, reiciendis dolorum dicta, tempore repudiandae modi quasi.</p>
            </div>
         </div>
      </div>
   )
}

export default SigleProductInfo
