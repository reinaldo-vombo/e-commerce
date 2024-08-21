// 'use client'
// import { motion } from 'framer-motion';
// import React, { useEffect, useState } from 'react'
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
// import { siteContent } from '@/constant/site-content';
// import { type CarouselApi } from "@/components/ui/carousel"
// import Image from 'next/image';
// import { Button } from './ui/button';


// const product = siteContent.products.filter(item => item.display === 'banner')

// const Carousell = () => {
//    const [api, setApi] = React.useState<CarouselApi>()
//    const [current, setCurrent] = useState(0)
//    const [count, setCount] = useState(0)
//    const reviel = {
//       hidden: { x: -200, opacity: 0 },
//       show: { x: 0, opacity: 1 }
//    }

//    useEffect(() => {
//       if (!api) {
//          return
//       }

//       setCount(api.scrollSnapList().length)
//       setCurrent(api.selectedScrollSnap() + 1)

//       api.on("select", () => {
//          setCurrent(api.selectedScrollSnap() + 1)
//       })
//    }, [api])

//    return (
//       <Carousel opts={{ loop: true }} className="w-full h-screen max-w-full relative" setApi={setApi}>
//          <CarouselContent>
//             {product.map((item) => (
//                <CarouselItem key={item.id} className="relative">
//                   <div className="nike-logo-container" style={{ maskImage: `url(/vector-2.svg)` }} />
//                   <div className="container absolute inset-0">
//                      <div className="grid grid-cols-12 gap-2 mt-24">
//                         <div className='col-span-5 flex'>
//                            <div className='space-y-7'>
//                               <h2 className='h1-bold line-clamp-2'>{item.title}</h2>
//                               <p>{item.description}</p>
//                               <div className="flex items-center gap-4">
//                                  <Button>Compar</Button>
//                               </div>
//                            </div>
//                         </div>
//                         <div className='col-span-7 relative'>
//                            {/* <div className='absolute rotate-[140deg] bottom-[34%] right-[68px] grid gap-4 '>
//                               <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 150, opacity: 1 }} transition={{ delay: 0.5, ease: 'linear', duration: 0.5 }} className="line-grodient w-80 h-2 rounded-full" />
//                               <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 300, opacity: 1 }} transition={{ delay: 0.7, ease: 'linear', duration: 0.5 }} className="line-grodient w-80 h-2 rounded-full" />
//                               <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 450, opacity: 1 }} transition={{ delay: 0.9, ease: 'linear', duration: 0.5 }} className="line-grodient w-80 h-2 rounded-full" />
//                            </div> */}
//                         </div>
//                      </div>
//                      <motion.div className="absolute right-[12%] bottom-0">
//                         <Image src={item.noBackground} className='object-cover' width={900} height={900} alt={item.title} />
//                      </motion.div>
//                   </div>
//                </CarouselItem>
//             ))}
//          </CarouselContent>
//          <CarouselPrevious className='absolute bottom-0 right-0' />
//          <CarouselNext className='absolute bottom-0 right-0' />
//       </Carousel >
//    );
// }

// export default Carousell
