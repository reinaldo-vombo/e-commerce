'use client'

import { Icons } from "@/constant/icons";
import { ConversLogo, NikeLogo } from "@/constant/svgIcons";
import Image from "next/image";
import { useState } from "react";
import Stars from "../product/Stars";
import { TProduct } from "../product/type";
import { ScrollArea } from "../ui/scroll-area";

// type TProps = {
//    image: string;
//    title: string;
//    images: {
//       color: string;
//       urls: string[];
//    }[];
//    setSelectedId: any;
//    brand: string
//    price: number
// }
interface IProsps extends TProps {
   setSelectedId: any;
}
type TProps = {
   props: TProduct
}


const MobileProductPreview = ({ props, setSelectedId }: IProsps) => {
   const { image, brand, title, images, price, description } = props
   const [preview, setPreview] = useState(image)

   const [slectedColor, setSelectedColor] = useState<number | null>()
   const [{ urls }] = images;
   const selectProductColorPreview = (colorArr: string[], index: number) => {
      // setPreview(colorArr)
      setSelectedColor(index)
   }
   const getProductBrand = () => {
      switch (brand) {
         case 'Nike':
            return <NikeLogo width={50} height={50} />;
         case 'Converse':
            return <ConversLogo width={50} height={50} />;
         default:
            return null;
      }
   }
   return (
      <div className="h-screen">
         <div className='relative h-80'>
            <Image src={preview} className='object-cover' fill sizes='100%' alt={title} />
            <div className='absolute to inset-0 bg-gradient-to-b from-[#484848] to-transparent h-[10.25rem]'>
               <div className='flex items-center justify-between p-4'>
                  <button onClick={() => setSelectedId(null)}>
                     <Icons.arrowLeft className='text-white' width={25} />
                  </button>
                  <button type='button' aria-label='heart icon'>
                     <Icons.heart className='text-white' width={25} />
                  </button>
               </div>
            </div>
         </div>
         <ScrollArea className="mt-4 container h-[500px]">
            <div className='flex items-center gap-4'>
               {urls.map((src, index) => (
                  <button className={`${slectedColor === index ? 'border border-black' : ''} rounded-md`} type="button" key={index} onClick={() => setPreview(src)}>
                     <Image src={src} width={70} height={70} alt={`${title}-${index}`} />
                  </button>
               ))}
            </div>
            <div className="mt-4">
               <div className="space-y-5">
                  {getProductBrand()}
                  <div className="flex justify-between">
                     <div className="space-y-2">
                        <h2 className="h3-bold">{title}</h2>
                        <Stars length={5} />
                     </div>
                     <div className="space-y-2">
                        <p className="font-bold">${price}</p>
                        <button className="rounded-full p-2 bg-slate-200 flex" type="button" aria-label="share icon">
                           <Icons.share className="m-auto" width={20} />
                        </button>
                     </div>
                  </div>
               </div>
               <div className='space-y-2'>
                  <h3 className="font-bold">Cores</h3>
                  <div className="flex items-center gap-4">
                     {images.map((src, index) => (
                        <button className={`${slectedColor === index ? 'border border-black' : ''} rounded-full size-5`} style={{ backgroundColor: src.color }} type="button" key={index} onClick={() => selectProductColorPreview(src.urls, index)}>
                        </button>
                     ))}
                  </div>
               </div>
               <div className="container mt-4">
                  <div className="space-y-6">
                     <div className="space-y-2">
                        <h3 className="base-semibold">Tamanho</h3>
                     </div>
                     <div className="space-y-2">
                        <h3 className="base-semibold">Descrição</h3>
                        <p className="text-slate-500">{description}</p>
                     </div>
                     <div className="space-y-2">
                        <h3 className="base-semibold">Detalhes</h3>
                        <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic quasi veniam amet repellendus nulla optio alias. Pariatur deserunt doloribus, recusandae porro non, reiciendis dolorum dicta, tempore repudiandae modi quasi.</p>
                     </div>
                  </div>
               </div>
            </div>
         </ScrollArea>
      </div>
   )
}

export default MobileProductPreview
