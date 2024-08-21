'use client'
import CardBody from '../shared/CardBody'
import { motion } from 'framer-motion';
import { TProductProps } from './type'
import Image from 'next/image'
import { ConversLogo, NikeLogo } from '@/constant/svgIcons'
import { Button } from '../ui/button'
import { Icons } from '@/constant/icons'
import { useState } from 'react'
import { HIDE_BUTTON } from '@/lib/motion';
import MoreDetails from './MoreDetails';
import { toast } from 'sonner';

const Product = ({ props }: TProductProps) => {
   const [hoverd, setHoved] = useState(false)
   const { title, description, image, brand, price } = props
   const getBrandLogo = () => {
      switch (brand) {
         case 'Nike':
            return <NikeLogo width={50} height={50} />;
         case 'Converse':
            return <ConversLogo width={50} height={50} />;
         default:
            return null;
      }
   }
   const addToFavorite = () => {
      toast.success('Item adicionado a lista de favoritos')
   }
   return (
      <div className='col-span-4'>
         <CardBody className='relative'>
            <div className='relative h-[25rem] w-full'>
               <Image src={image} fill alt={title} />
            </div>
            <div>
               <div className='flex items-center justify-between'>
                  <span>{getBrandLogo()}</span>
                  <MoreDetails
                     title={title}
                     description={description}
                     image={image}
                     price={price}
                  />
               </div>
               <div className='flex items-center justify-between'>
                  <h2 className='h3-bold line-clamp-1'>{title}</h2>
                  <h3 className='font-semibold'>{price} (kz)</h3>
               </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
               <motion.div className='w-full' onMouseEnter={() => setHoved(true)} onMouseLeave={() => setHoved(false)}>
                  <Button className='w-full rounded-xl'>Compar</Button>
               </motion.div>
               <motion.div variants={HIDE_BUTTON} initial='hidden' animate={hoverd ? 'visible' : 'hidden'} transition={{ duration: 0.3 }} className='w-full'>
                  <Button className='w-full rounded-xl bg-slate-200 text-black'>Adicionar ao carrinho</Button>
               </motion.div>
            </div>
            <motion.button whileTap={{ scale: 0.5 }} className='absolute top-5 right-5' onClick={addToFavorite}>
               <Icons.heart width={30} />
            </motion.button>
         </CardBody>
      </div>
   )
}

export default Product
