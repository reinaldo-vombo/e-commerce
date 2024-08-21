import { HIDE_FILTERS, HIDE_FILTERS_CONTENT } from "@/lib/motion"
import { motion } from "framer-motion"
import { Separator } from "../ui/separator"
import Dropdwon from "../shared/CategoryDropdwon"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { AdidasLogo, ConversLogo, NDLogo, NikeLogo, PumaLogo } from "@/constant/svgIcons"


const FilterProducts = ({ showFilters }: { showFilters: boolean }) => {
   const [price, setPrice] = useState([33]);
   const submitPrice = (price: number[]) => {
      console.log(price);
   }


   return (
      <motion.div className='relative p-2' initial={false} variants={HIDE_FILTERS} animate={showFilters ? 'show' : 'hidden'}>
         <motion.div className='' variants={HIDE_FILTERS_CONTENT} animate={showFilters ? 'show' : 'hidden'}>
            <div className='mt-6 space-y-4'>
               <div>
                  <Dropdwon />
               </div>
               <div className="space-y-3">
                  <h3 className="base-semibold">Preços</h3>
                  <h3>Selected Price: ${price[0]}</h3>
                  <Slider
                     defaultValue={[33]}
                     max={100}
                     step={1}
                     onValueChange={(value) => setPrice(value)}
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
                     <span>Homens</span>
                     <span>Mulheres</span>
                     <span>Crianças</span>
                  </div>
                  <Separator />
               </div>
               <div className="space-y-3">
                  <h3 className="base-semibold">Marcas</h3>
                  <div className="grid gap-2">
                     <NikeLogo width={40} height={40} />
                     <ConversLogo width={40} height={40} />
                     <PumaLogo width={40} height={40} />
                     <AdidasLogo width={40} height={40} />
                     <NDLogo width={40} height={40} />
                  </div>
                  <Separator />
               </div>
               <div>
                  <h3 className="base-semibold">Cores</h3>
                  <Separator />
               </div>
            </div>
         </motion.div>
      </motion.div>
   )
}

export default FilterProducts
