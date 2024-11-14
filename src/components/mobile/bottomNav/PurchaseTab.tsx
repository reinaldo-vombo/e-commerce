import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import MobilePostFeedback from "../MobilePostFeedback"
import { Icons } from "@/constant/icons"
import { useState } from "react"

const PurchaseTab = () => {
   const [shaowBillingTab, setShaowBillingTab] = useState(false)
   return (
      <motion.div
         animate={{ y: shaowBillingTab ? 0 : '89%' }}
         className='fixed top-0 bg-black w-full h-full'>
         <div className="container relative flex flex-col">
            <button type="button" className="absolute mx-auto inset-x-0 top-1 w-32 rounded-lg bg-neutral-300 h-5" onClick={() => setShaowBillingTab(prev => !prev)} />
            {/* <div className="flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <MobilePostFeedback trigger={<Icons.chat width={20} />} />
                  <MobilePostFeedback trigger={<Icons.mapPin width={20} />} />
               </div>
               <Button>Adicionar ao carrinho</Button>
            </div> */}
         </div>
      </motion.div>
   )
}

export default PurchaseTab
