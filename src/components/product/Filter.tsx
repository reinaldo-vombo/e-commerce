import { useState } from "react"
import { motion } from "framer-motion"
import { Separator } from "../ui/separator"
import { Slider } from "@/components/ui/slider"
import { BRANDS, CATEGORY } from "@/constant/site-content"
import Dropdwon from "../shared/CategoryDropdwon"
import { HIDE_FILTERS, HIDE_FILTERS_CONTENT } from "@/lib/motion"
import { FilterOptions } from "@/hooks/type"

type TFilterProps = {
   showFilters: boolean
   onChange: (filter: FilterOptions) => void
}

const FilterProducts = ({ showFilters, onChange }: TFilterProps) => {
   const [price, setPrice] = useState(0);

   const submitPrice = (price: number[]) => {
      console.log(price[0]);
      setPrice(price[0])

      if (price[0] <= 15000) {
         onChange({ minPrice: price[0] })
      } else if (price[0] > 15000) {
         onChange({ maxPrice: price[0] })
      }
   }
   return (
      <motion.div className='relative p-2' initial={false} variants={HIDE_FILTERS} animate={showFilters ? 'show' : 'hidden'}>
         <motion.div className='' variants={HIDE_FILTERS_CONTENT} animate={showFilters ? 'show' : 'hidden'}>
            <div className='mt-6 space-y-4'>
               <div>
                  <Dropdwon onChange={onChange} />
               </div>
               <div className="space-y-3">
                  <h3 className="base-semibold">Preços</h3>
                  <h3>Selected Price: ${price}</h3>
                  <Slider
                     defaultValue={[5000]}
                     max={30000}
                     min={5000}
                     step={1}
                     onValueCommit={(value) => submitPrice(value)}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                     <span>$5000</span>
                     <span>$30000</span>
                  </div>
               </div>
               <div className="space-y-3">
                  <h3 className="base-semibold">Género</h3>
                  <div className="grid gap-2">
                     {CATEGORY.map((item) => (
                        <span className="cursor-pointer" key={item.id}>{item.title}</span>
                     ))}
                  </div>
                  <Separator />
               </div>
               <div className="space-y-3">
                  <h3 className="base-semibold">Marcas</h3>
                  <div className="grid gap-2">
                     {BRANDS.map((brand) => (
                        <div key={brand.id} onClick={() => onChange({ brand: brand.value })}>
                           {brand.logo}
                        </div>
                     ))}
                  </div>
                  <Separator />
               </div>
               <div className="space-y-3">
                  <h3 className="base-semibold">Cores</h3>
                  <div className="flex items-center flex-wrap gap-2">
                     {Array.from({ length: 10 }).map((_, index) => (
                        <div className="bg-red-500 rounded-full size-6 cursor-pointer" key={index} />
                     ))}
                  </div>
                  <Separator />
               </div>
            </div>
         </motion.div>
      </motion.div>
   )
}

export default FilterProducts
