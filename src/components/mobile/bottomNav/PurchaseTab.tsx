import { Button } from "@/components/ui/button"
import MobilePostFeedback from "../MobilePostFeedback"
import { Icons } from "@/constant/icons"

const PurchaseTab = () => {
   return (
      <div className='fixed bottom-0 w-[84%] h-16 bg-white'>
         <div className="container">
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <MobilePostFeedback trigger={<Icons.chat width={20} />} />
                  <MobilePostFeedback trigger={<Icons.mapPin width={20} />} />
               </div>
               <Button>Adicionar ao carrinho</Button>
            </div>
         </div>
      </div>
   )
}

export default PurchaseTab
