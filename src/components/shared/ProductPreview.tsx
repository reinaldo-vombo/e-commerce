'use client'

import Image from "next/image"
import { TProductPrevie } from "./type"
import { useState } from "react"

const ProductPreview = ({ images }: TProductPrevie) => {
   const [selectedImage, setSelectedImage] = useState<string | null>(null)
   const [{ urls }] = images
   const selectImagePreview = (image: string) => {
      setSelectedImage(image)
   }

   return (
      <div className="grid grid-cols-12 gap-4">
         <div className="col-span-2 grid gap-4">
            {urls.map((img, index) => (
               <button type="button" key={index} aria-label={`shoe image-${index}`} onClick={() => selectImagePreview(img)}>
                  <Image src={img} className="rounded-lg cursor-pointer h-20 object-cover" width={90} height={40} alt="img" />
               </button>
            ))}
         </div>
         <div className="col-span-10 relative">
            <Image src={selectedImage ? selectedImage : urls[0]} className="object-cover rounded-lg" fill alt="nike shoe" />
         </div>
      </div>
   )
}

export default ProductPreview
