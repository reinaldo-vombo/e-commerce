'use client'
import { Icons } from "@/constant/icons";
import Link from "next/link"
import { FramerModal } from "../shared/MobileModal";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import MobileUserTa from "./layout/MobileUserTab";
import MobileAccounte from "./layout/MobileAccounte";
type TTopNav = {
   link?: string,
   title: string;
   showNotification?: boolean
}
const ISLOGIN = true
const MobileNav = ({ link = '/', showNotification = true, title }: TTopNav) => {
   const [open, setOpen] = useState(false)
   return (
      <nav className='sticky bg-white z-20 py-4 mb-4 h-[80px] w-full top-0 inset-x-0'>
         <div className="container flex items-center justify-between">
            <div>
               <Link href={link}><Icons.arrowLeft width={20} /></Link>
            </div>
            <div>
               <h1 className="text-black base-semibold">{title}</h1>
            </div>
            {showNotification && (
               <Avatar className="size-[25px] cursor-pointer" onClick={() => setOpen(true)}>
                  <AvatarImage src="/avatar.jpg" alt="Customer" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
            )}
         </div>
         <FramerModal open={open} setOpen={setOpen}>
            <div className="p-2">
               <h2 className="h3-bold text-center">Conta</h2>
               <Separator className="mt-4 mb-6" />
               <MobileAccounte />
            </div>
         </FramerModal>
      </nav>
   )
}

export default MobileNav
