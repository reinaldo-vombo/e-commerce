import { Icons } from "@/constant/icons"
import SearchDropdow from "../SearchDropdow"
import SheetModal from "../shared/SheetModal"
import Image from "next/image"

const MobileBenner = () => {
   return (
      <div className="sm:hidden grid space-y-5">
         <div className="grid grid-cols-12 gap-1">
            <div className="col-span-10">
               <SearchDropdow trigger={
                  <div className="border border-slate-200 rounded-lg p-3 flex">
                     <Icons.search width={20} className="ml-auto" />
                  </div>
               } />
            </div>
            <div className="col-span-2 flex justify-center">
               <SheetModal
                  side="bottom"
                  label="fliter icon"
                  trigger={
                     <div className="bg-black rounded-lg p-3 flex">
                        <Icons.filter width={20} className="text-white" />
                     </div>
                  }>hello</SheetModal>
            </div>

         </div>
         <div className="bg-slate-100 rounded-lg relative p-2 flex">
            <div className="mr-auto">
               <span>Summer sale</span>
               <h2 className="h2-bold">15% OFF</h2>
            </div>
            <Image src='/AIR+MAX+DN-nbg.png' className="absolute right-3" width={128} height={128} alt="banner" />
         </div>
      </div>
   )
}



export default MobileBenner
