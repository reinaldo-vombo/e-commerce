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
import ProductCard from "./ProductCard";
import MobileSingleProduct from "./layout/MobileSingleProduct";
import MobileProductCard from "./MobileProductCard";

const MobileCarousel = () => {
   const [selectedId, setSelectedId] = useState<string | null>(null);
   return (
      <>
         <Carousel>
            <CarouselContent>
               {PRODUCTS.map((item) => (
                  <CarouselItem key={item.id}>
                     <motion.div
                        layoutId={item.id}
                        onClick={() => setSelectedId(item.id)}
                        style={{ cursor: 'pointer' }}
                     >
                        <MobileProductCard props={item} />
                     </motion.div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
         </Carousel>

         <AnimatePresence>
            {selectedId && (
               <motion.div
                  layoutId={selectedId}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  style={{
                     position: 'fixed',
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0,
                     background: 'white',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     zIndex: 1000,
                  }}
               >
                  <MobileSingleProduct productId={selectedId} products={PRODUCTS} setSelectedId={setSelectedId} />
                  <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   )
}

export default MobileCarousel
