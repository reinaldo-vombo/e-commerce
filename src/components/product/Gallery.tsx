import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

type TGalleryProps = {
   images: {
      image: string,
      name: string
   }[]
}
const Gallery = ({ images }: TGalleryProps) => {
   return (
      <div>
         <div className='space-y-4'>
            <h2 className='h3-bold'>Como os outros estão usando</h2>
            <p>Carrege a tua foto ou mencion @Redxpw no instagram para te abilitares em aprecer em destaques</p>
            <Button className='bg-white rounded-full text-black border border-slate-300 hover:bg-black hover:text-white'>Carregar a tua foto</Button>
            <div className='flex items-center gap-8'>
               {images.length > 0 ? images.map((src, index) => (
                  <div className='relative size-96' key={index}>
                     <Image src={src.image} className='object-cover rounded-lg' fill alt={src.name} />
                  </div>
               )) : (
                  <p>Parece que ninguem ainda postou foto</p>
               )}
            </div>
         </div>
      </div>
   )
}

export default Gallery
