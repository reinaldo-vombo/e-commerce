import { Separator } from "@/components/ui/separator"
import { PRODUCTS } from "@/constant/site-content"
import Image from "next/image"
import { SalesChart } from "../chart/Sales";

const ProductDetails = () => {
   const product = PRODUCTS[0];
   const sizes = () => {
      const size = product.size.map(size => {
         return (<span key={size}>{size},</span>)
      })
      return size
   }
   return (
      <div className="mt-8 w-[30rem]">
         <div className="space-y-5">
            <div className="relative w-full h-80">
               <Image src={product.image} className="rounded-md object-cover" fill sizes="100%" alt={product.title} />
            </div>
            <div className="flex items-center justify-evenly">
               {product.images[0].urls.map((url, index) => index < 3 && (
                  <Image src={url} className="rounded-md" width={90} height={90} alt={`preview image-${index}`} key={index} />
               ))}
               {product.images[0].urls.length > 3 ? (
                  <div className="w-[90px] h-[115px] bg-slate-100 rounded-md text-center flex">
                     <div className="grid m-auto">
                        <span>Mais</span>
                        <b>{product.images[0].urls.length}</b>
                     </div>
                  </div>
               ) : null}
            </div>
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
                  <b>Tamanhos:</b> {sizes()}
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
            </div>
         </div>
      </div>
   )
}

export default ProductDetails
