
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { PRODUCTS } from "@/constant/site-content"
import Product from "../product/ProductList"
import ProductCard from "../mobile/ProductCard"


const ProductCarousel = () => {
   return (
      // 33% of the carousel width. className="basis-1/3"
      <Carousel>
         <CarouselContent>
            {PRODUCTS.map((item) => (
               <CarouselItem className="sm:basis-1/3" key={item.id}>
                  <Product props={item} />
                  <ProductCard props={item} />
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious className="hidden md:block" />
         <CarouselNext className="hidden md:block" />
      </Carousel>

   )
}

export default ProductCarousel
