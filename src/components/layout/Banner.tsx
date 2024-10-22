
'use client'
import { BANNER } from '@/constant/site-content'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useState } from 'react'
import { Icons } from '@/constant/icons'
import { Linkedin } from 'lucide-react'
import { NikeLogo } from '@/constant/svgIcons'
import { motion, AnimatePresence } from 'framer-motion';
import DotPattern from '../BotsBackground'
import { cn } from '@/lib/utils'
import MobileBenner from '../mobile/MobileBenner'

const shoe = BANNER

const Banner = () => {
   const [selectedImage, setSelectedImage] = useState('')

   const handleImagePreview = (image: string) => {
      setSelectedImage(image)
   }

   return (
      <section className='sm:h-screen overflow-hidden relative'>
         <div className='pt-28 h-full relative isolate hidden sm:block'>
            <div className='brand-name relative text-slate-200 z-[-1]' data-brand-name={shoe.title}></div>
            <div className='absolute bottom-[12%] right-[30%] rotate-[-22deg]'>
               <div className='relative w-[50rem] h-[25rem]'>
                  <AnimatePresence>
                     <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='absolute inset-0'
                     >
                        <Image src={selectedImage || shoe.noBackground} fill alt={shoe.title} />
                     </motion.div>
                  </AnimatePresence>
               </div>
            </div>
            <div className="container flex relative z-10 h-full">
               <div className='absolute right-0 bottom-0 top-0 flex flex-col pr-8'>
                  <div className='space-y-4 mt-24'>
                     {shoe.images.map((img, index) => (
                        <div className='cursor-pointer flex images' key={index} onClick={() => handleImagePreview(img)}>
                           <Image src={img} className='ml-auto' width={100} height={100} alt={`preview-${index}`} />
                        </div>
                     ))}
                  </div>
                  <div className='mt-auto space-y-4'>
                     <h2 className='h3-bold'>{shoe.price}(kz)</h2>
                     <Button className='rounded-lg flex items-center gap-2'>
                        <span>Adicionar ao carrinho</span>
                        <Icons.shoppingCart width={20} className='text-white' />
                     </Button>
                  </div>
               </div>
               <div className='absolute left-0 top-0 bottom-0 flex pl-8'>
                  <div>
                     <NikeLogo width={50} height={50} />
                  </div>
                  <div className='mt-auto flex gap-2'>
                     <Linkedin fill='#000' width={30} />
                     <Linkedin fill='#000' width={30} />
                     <Linkedin fill='#000' width={30} />
                  </div>
               </div>
            </div>
         </div>
         <DotPattern
            className={cn(
               "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] hidden sm:block",
            )} />
         <MobileBenner />
      </section>
   )
}

export default Banner
