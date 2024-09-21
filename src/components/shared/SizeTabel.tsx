'use client'

import { SIZES } from "@/constant/site-content"
import { useState } from "react"

type TSizeTabel = {
   productSize: number[]
}
const SizeTabel = ({ productSize }: TSizeTabel) => {
   const [selectedSize, setSelectedSize] = useState<number | null>(null)
   const handleSelecteSize = (sizeIdx: number) => {
      setSelectedSize(sizeIdx)
   }
   return (
      <div className="space-y-3">
         <div className="flex items-center justify-between">
            <b>Selecionar tamanho</b>
            <b className="text-slate-400">Tabela de tamanhos</b>
         </div>
         <div className="flex items-center justify-around gap-1 flex-wrap">
            {SIZES.map((size, index) => (
               <>
                  <input type="hidden" name={`size-${index}`} />
                  <button
                     type="button"
                     className={`${productSize.includes(size) ? '' : 'bg-[#fcfdff] text-[#dcdcdc] cursor-not-allowed'} ${selectedSize === size ? 'bg-black text-white' : ''} border border-slate-200 rounded-lg p-1 w-[4.5rem] h-12 font-bold text-sm`}
                     key={index}
                     onClick={() => handleSelecteSize(size)}
                  >
                     EU {size}
                  </button>
               </>
            ))}
         </div>
      </div>
   )
}

export default SizeTabel
