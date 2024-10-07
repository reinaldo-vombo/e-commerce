"use client";
import React, { ReactNode, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowUpDown, BookCheck, CreditCard, Home, Images, LucideBoxes, Megaphone, MessageSquare, Settings, ShoppingBag, Store, User } from "lucide-react";
import NavBar from "./NavBar";
import { Separator } from "../ui/separator";

type TDashbord = {
   children: ReactNode
}

const links = [
   {
      label: "Dashboard",
      href: "#",
      icon: (
         <Home className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Productos",
      href: "/dashboard/product",
      icon: (
         <ShoppingBag className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Inventorio",
      href: "/dashboard/inventory-managemant",
      icon: (
         <LucideBoxes className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Encomendas",
      href: "/dashboard/orders",
      icon: (
         <BookCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Devoluções",
      href: "#",
      icon: (
         <ArrowUpDown className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Pagamentos",
      href: "#",
      icon: (
         <CreditCard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Loja",
      href: "/dashboard/store-management",
      icon: (
         <Store className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Campanha",
      href: "#",
      icon: (
         <Megaphone className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Blog",
      href: "/dashboard/blog-management",
      icon: (
         <Images className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Gerenciar úsuarios",
      href: "#",
      icon: (
         <User className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Feedback",
      href: "#",
      icon: (
         <MessageSquare className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Definições",
      href: "#",
      icon: (
         <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
   {
      label: "Sair",
      href: "#",
      icon: (
         <ArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
   },
];
export function Dasboard({ children }: TDashbord) {
   const [open, setOpen] = useState(false);
   return (
      <div
         className={cn(
            "rounded-md flex flex-col md:flex-row bg-white dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
            "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
         )}
      >
         <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
               <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                  {open ? <Logo /> : <LogoIcon />}
                  <div className="mt-8 flex flex-col gap-2">
                     {links.map((link, idx) => (
                        <SidebarLink key={idx} link={link} />
                     ))}
                  </div>
               </div>
               <div>
                  <SidebarLink
                     link={{
                        label: "Manu Arora",
                        href: "/dashboard/profile",
                        icon: (
                           <Image
                              src="/avatar.jpg"
                              className="h-7 w-7 flex-shrink-0 rounded-full"
                              width={50}
                              height={50}
                              alt="Avatar"
                           />
                        ),
                     }}
                  />
               </div>
            </SidebarBody>
         </Sidebar>
         <div className="w-full overflow-y-auto">
            <NavBar />
            <Separator />
            <main className="p-6">
               {children}
            </main>
         </div>

      </div>
   );
}
export const Logo = () => {
   return (
      <Link
         href="#"
         className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
         <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
         <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-medium text-black dark:text-white whitespace-pre"
         >
            Acet Labs
         </motion.span>
      </Link>
   );
};
export const LogoIcon = () => {
   return (
      <Link
         href="#"
         className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
         <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      </Link>
   );
};

