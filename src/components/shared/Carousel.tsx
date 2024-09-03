'use client'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { TCarousel } from "./type"
import { PRODUCTS } from "@/constant/site-content"
import Product from "../product/ProductList"


const ProductCarousel = () => {
   return (
      // 33% of the carousel width. className="basis-1/3"
      <Carousel>
         <CarouselContent>
            {PRODUCTS.map((item) => (
               <CarouselItem className="basis-1/3" key={item.id}>
                  <Product props={item} key={item.id} />
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
      </Carousel>

   )
}

export default ProductCarousel
