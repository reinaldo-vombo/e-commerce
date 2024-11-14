'use client'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { PRODUCTS } from "@/constant/site-content"
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import MobileSingleProduct from "./layout/MobileSingleProduct";
import MobileProductCard from "./MobileProductCard";
import ModalTansition from "../shared/AnimatedModal";

const MobileCarousel = () => {
   const [selectedId, setSelectedId] = useState<string | null>(null);
   return (
      <>
         <Carousel>
            <CarouselContent>
               {PRODUCTS.map((item) => (
                  <CarouselItem key={item.id}>
                     <div style={{ cursor: 'pointer' }}>
                        <MobileProductCard props={item} onToggleModal={setSelectedId} />
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
         </Carousel>
         <ModalTansition
            isOpen={!!selectedId}
            onClose={() => setSelectedId(null)}
            layoutId={selectedId || ""}
         >
            <MobileSingleProduct
               productId={selectedId}
               products={PRODUCTS}
               setSelectedId={setSelectedId}
            />
         </ModalTansition>

      </>
   )
}

export default MobileCarousel
