import { Icons } from "@/constant/icons"
import SearchDropdow from "../SearchDropdow"
import Image from "next/image"
import { Button } from "../ui/button"

const MobileBenner = () => {
   return (
      <div className="sm:hidden container grid space-y-5">
         <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12">
               <SearchDropdow trigger={
                  <div className="border border-slate-200 rounded-lg p-3 flex">
                     <Icons.search width={20} className="ml-auto" />
                  </div>
               } />
            </div>
         </div>
         <div className="bg-slate-100 rounded-lg relative p-2 flex h-40">
            <div className="mr-auto space-y-3">
               <span>Summer sale</span>
               <h2 className="h2-bold">15% OFF</h2>
               <Button>Ver Promoção</Button>
            </div>
            <Image src='/AIR+MAX+DN-nbg.png' className="absolute right-3 my-auto" width={200} height={200} alt="banner" />
         </div>
      </div>
   )
}



export default MobileBenner
