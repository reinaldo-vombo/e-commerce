'use client'

import { Fragment, useEffect, useState } from "react"
import { ShiftingDropDown } from "./Dropdwon"
import { usePathname } from "next/navigation"
import { Logo, } from "@/constant/svgIcons"
import { Icons } from "@/constant/icons"
import SearchDropdow from "../SearchDropdow"
import TopBar from "./TopBar"
import BlogNav from "./BlogNav"
import Link from "next/link"
import InfoNav from "./InfoNav"
import SheetModal from "../shared/SheetModal"
import FavoriteItem from "../wishList/ListItem"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import CartPage from "../layout/CartPage"

const Head = () => {
   const path = usePathname()
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50); // Change 50 to the scroll threshold you prefer
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
   const isLogIn = true
   return (
      <header className={`fixed w-full z-30 ${path === '/noticias' ? 'bg-black' : scrolled ? 'bg-white shadow' : `bg-transparent ${path === '/' ? 'text-black' : 'text-white'} `} transition-all ease-in hidden sm:block`}>
         {path === '/noticias' ? <BlogNav /> : path === '/checkout' ? <InfoNav /> : (
            <Fragment>
               <TopBar />
               <div className="container">
                  <nav className='flex items-center justify-between'>
                     <div>
                        <Link href='/'>
                           <Logo width={60} height={60} />
                        </Link>
                     </div>
                     <div>
                        <ShiftingDropDown scrolled={scrolled} />
                     </div>
                     <div className="flex items-center gap-3">
                        <SearchDropdow trigger={<Icons.search width={25} />} />
                        {isLogIn ? (
                           <Link href='/perfiel'>
                              <Avatar className="size-[25px]">
                                 <AvatarImage src="/placeholder-user.jpg" alt="Customer" />
                                 <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                           </Link>
                        ) : (
                           <Link href='/auth' aria-label="user icon" className="hover:bg-slate-200 rounded-full p-2 flex items-center justify-center">
                              <Icons.user width={25} />
                           </Link>
                        )}
                        <SheetModal
                           label="shop icon"
                           side="right"
                           className="sm:max-w-lg"
                           title="Productos No Carrinho"
                           trigger={
                              <div className="hover:bg-slate-200 rounded-full p-2 flex items-center justify-center">
                                 <Icons.shoppingCart width={25} />
                              </div>
                           }
                        >
                           <CartPage />
                        </SheetModal>
                        <SheetModal
                           label="shop icon"
                           side="right"
                           className="sm:max-w-lg"
                           trigger={
                              <div className="hover:bg-slate-200 rounded-full p-2 flex items-center justify-center">
                                 <Icons.heart width={25} />
                              </div>
                           }
                        >
                           <FavoriteItem />
                        </SheetModal>
                     </div>
                  </nav>
               </div>
            </Fragment>
         )}
      </header>
   )
}

export default Head
