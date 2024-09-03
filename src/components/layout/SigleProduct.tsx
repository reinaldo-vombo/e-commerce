'use client'
import { useState } from "react"
import ProductPreview from "../shared/ProductPreview"
import Breadcrumbe from "../shared/Breadcrumbe"
import SeachStore from "../product/SeachStore"
import SizeTabel from "../shared/SizeTabel"
import Comments from "../product/Comments"
import { TProduct } from "../product/type"
import { Icons } from "@/constant/icons"
import { Button } from "../ui/button"
import Modal from "../shared/Modal"
import Image from "next/image"
import Gallery from "../product/Gallery"
import ProductCarousel from "../shared/Carousel"

type TSigleProduct = {
   product: TProduct
}

const SigleProduct = ({ product }: TSigleProduct) => {
   const [preview, setPreview] = useState<string[] | null>(product.images[0].urls)
   const [slectedColor, setSelectedColor] = useState<number | null>()
   const selectProductColorPreview = (colorArr: string[], index: number) => {
      setPreview(colorArr)
      setSelectedColor(index)
   }

   return (
      <section>
         <Breadcrumbe video="/video.mp4" />
         <div className="padding">
            <div className="container space-y-11">
               <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                     <ProductPreview images={product.images} />
                  </div>
                  <div className="col-span-6">
                     <div className="w-[69%] space-y-7">
                        <div>
                           <h2 className="h2-bold">{product.title}</h2>
                           <h3 className="font-semibold">Sapatilha para homens</h3>
                           <h4 className="mt-6 font-bold">{product.price} (kz)</h4>
                        </div>
                        <div className="flex items-center gap-4">
                           {product.images.map((src, index) => (
                              <button className={`${slectedColor === index ? 'border border-black' : ''} rounded-md`} type="button" key={index} onClick={() => selectProductColorPreview(src.urls, index)}>
                                 <Image src={src.urls[0]} width={70} height={70} alt={`${product.title}-${index}`} />
                              </button>
                           ))}
                        </div>
                        <SizeTabel productSize={product.size} />
                        <div className="grid gap-6">
                           <Button className="rounded-full py-6 w-full font-semibold tracking-wider">Adicionar ao carrinho</Button>
                           <Button className="rounded-full bg-white text-black border border-slate-200 py-6 w-full flex items-center gap-3 hover:text-white">
                              Marcar como favorito <Icons.heart width={20} />
                           </Button>
                           <p className="text-center mt-4">Este producto esta excluido de promoção e <br /> e desconto no site</p>
                           <div className="mt-4">
                              <h3 className="font-semibold">Levantamento grátis</h3>
                              <Modal btn={<p className="underline">Procurar um loja</p>} title='Selecioneum local de levantamento'>
                                 <SeachStore />
                              </Modal>
                           </div>
                           <div>
                              <p className="font-semibold">{product.description}</p>
                           </div>
                           <Modal btn={<p className="underline font-semibold text-left">Ver detalhes do producto</p>} title='Selecioneum local de levantamento'>
                              <SeachStore />
                           </Modal>
                           <Comments />
                        </div>
                     </div>
                  </div>
               </div>
               <Gallery images={product.gallery} />
               <div className="space-y-6">
                  <h2 className="h2-bold">Productos relacionados</h2>
                  <ProductCarousel />
               </div>
            </div>
         </div>
      </section>
   )
}

export default SigleProduct
