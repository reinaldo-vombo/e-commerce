import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { PRODUCTS } from "@/constant/site-content"
import Image from "next/image"
import { useState } from "react"

const sigleProdut = PRODUCTS[0]
const initialState = sigleProdut.images[0].urls

const ProductSlider = () => {
   const [selectedItems, setSelectedItems] = useState<string[] | []>(initialState)
   return (
      <div className="space-y-6">
         <Carousel>
            <CarouselContent>
               {selectedItems.map((item, i) => (
                  <CarouselItem className="relative h-80" key={i}>
                     <Image src={item} className="rounded-md object-cover cursor-grab" fill sizes="100%" alt={`imagem-${i}`} />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>

         <Carousel>
            <CarouselContent>
               {sigleProdut.images.map((item, i) => (
                  <CarouselItem className="basis-1/3" key={i}>
                     <Image src={item.urls[0]} className="rounded-md object-cover cursor-grab" width={90} height={90} sizes="100%" alt='' />
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>

      </div>
   )
}

export default ProductSlider;
