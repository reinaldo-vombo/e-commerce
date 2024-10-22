import { Icons } from "@/constant/icons";
import { ArrowBigLeftIcon } from "lucide-react"
import Link from "next/link"
type TTopNav = {
   link?: string,
   title: string;
   showNotification?: boolean
}

const MobileNav = ({ link = '/', showNotification = true, title }: TTopNav) => {
   return (
      <nav className='sticky bg-white z-20 py-4 mb-4 h-[80px] w-full top-0 inset-x-0 flex items-center justify-between'>
         <div>
            <Link href={link}><Icons.arrowLeft width={20} /></Link>
         </div>
         <div>
            <h1 className="text-black base-semibold">{title}</h1>
         </div>
         {showNotification && (
            <div>
               <Icons.bell width={20} />
            </div>
         )}
      </nav>
   )
}

export default MobileNav
