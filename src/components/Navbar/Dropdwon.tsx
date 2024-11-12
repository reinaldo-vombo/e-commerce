'use client'
import React, { ReactNode, useCallback, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, } from "lucide-react";
import { NAV_ITEMS } from "@/constant/site-content";
import Link from "next/link";

type TabsProps = {
   children: ReactNode;
   tab: number;
   handleSetSelected: (val: number | null) => void;
   selected: number | null;
}
type TContentProps = {
   selected: number | null;
   dir: null | "l" | "r";
}

export const ShiftingDropDown = ({ scrolled }: any) => {
   return (
      <div className="flex w-full justify-start p-8 text-neutral-200  md:justify-center">
         <Tabs />
      </div>
   );
};


const Tabs = () => {
   const [selected, setSelected] = useState<number | null>(null);
   const [dir, setDir] = useState<null | "l" | "r">(null);

   const handleSetSelected = (val: number | null) => {
      if (typeof selected === "number" && typeof val === "number") {
         setDir(selected > val ? "r" : "l");
      } else if (val === null) {
         setDir(null);
      }

      setSelected(val);
   };

   return (
      <div className="relative flex h-fit gap-2" onMouseLeave={() => handleSetSelected(null)}>
         {TABS.map((t) => {
            return (
               <Tab
                  key={t.id}
                  selected={selected}
                  handleSetSelected={handleSetSelected}
                  tab={t.id}
               >
                  {t.title}
               </Tab>
            );
         })}

         <AnimatePresence>
            {selected && <Content dir={dir} selected={selected} />}
         </AnimatePresence>
      </div>
   );
};

const Tab = ({ children, tab, handleSetSelected, selected, }: TabsProps) => {
   return (
      <button
         id={`shift-tab-${tab}`}
         onMouseEnter={() => handleSetSelected(tab)}
         onClick={() => handleSetSelected(tab)}
         className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${selected === tab
            ? " bg-neutral-800 text-neutral-100"
            : "dark:text-neutral-400 text-black"
            }`}
      >
         <span>{children}</span>
         <ChevronDown
            className={`transition-transform ${selected === tab ? "rotate-180" : ""
               }`}
         />
      </button>
   );
};

const Content = ({ selected, dir, }: TContentProps) => {
   return (
      <motion.div
         id="overlay-content"
         initial={{ opacity: 0, y: 8, }}
         animate={{ opacity: 1, y: 0, }}
         exit={{ opacity: 0, y: 8, }}
         className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
      >
         <Bridge />
         <Nub selected={selected} />

         {TABS.map((t) => {
            return (
               <div className="overflow-hidden" key={t.id}>
                  {selected === t.id && (
                     <motion.div
                        initial={{
                           opacity: 0,
                           x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                     >
                        <t.Component />
                     </motion.div>
                  )}
               </div>
            );
         })}
      </motion.div>
   );
};

const Bridge = () => (
   <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
   const [left, setLeft] = useState(0);

   const moveNub = useCallback(() => {
      if (selected) {
         const hoveredTab = document.getElementById(`shift-tab-${selected}`);
         const overlayContent = document.getElementById("overlay-content");

         if (!hoveredTab || !overlayContent) return;

         const tabRect = hoveredTab.getBoundingClientRect();
         const { left: contentLeft } = overlayContent.getBoundingClientRect();

         const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

         setLeft(tabCenter);
      }
   }, [selected]);

   useEffect(() => {
      moveNub();
   }, [moveNub]);



   return (
      <motion.span
         style={{
            clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
         }}
         animate={{ left }}
         transition={{ duration: 0.25, ease: "easeInOut" }}
         className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
      />
   );
};

const MensMenu = () => {
   return (
      <div>
         <div className="flex gap-4">
            <div className="w-20">
               <h3 className="mb-2 text-sm font-medium">Tenis</h3>
               {NAV_ITEMS[0].shoes?.map(item => (
                  <Link href={`/productos?gender=homen&${item.query}`} className="mb-2 block text-sm text-neutral-400" key={item.id}>
                     {item.name}
                  </Link>
               ))}

            </div>
            <div>
               <h3 className="mb-2 text-sm font-medium">Vestuario</h3>
               {NAV_ITEMS[1].close?.map(item => (
                  <Link href={`/productos?gender=homen&${item.query}`} className="mb-1 block text-sm text-neutral-400" key={item.id}>
                     {item.name}
                  </Link>
               ))}
            </div>
            <div>
               <h3 className="mb-2 text-sm font-medium">Acessórios</h3>
               {NAV_ITEMS[2].acessories?.map(item => (
                  <Link href={`/productos?gender=homen&${item.query}`} className="mb-1 block text-sm text-neutral-400" key={item.id}>
                     {item.name}
                  </Link>
               ))}
            </div>
         </div>

         <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
            <span>View more</span>
            <ArrowRight />
         </button>
      </div>
   );
};

const WomensMenu = () => {
   return (
      <div className="flex gap-4">
         <div className="w-20">
            <h3 className="mb-2 text-sm font-medium">Tenis</h3>
            {NAV_ITEMS[0].shoes?.map(item => (
               <Link href={`/productos?gender=mulher&${item.query}`} className="mb-2 block text-sm text-neutral-400" key={item.id}>
                  {item.name}
               </Link>
            ))}

         </div>
         <div>
            <h3 className="mb-2 text-sm font-medium">Vestuario</h3>
            {NAV_ITEMS[1].close?.map(item => (
               <Link href={`/productos?gender=mulher&${item.query}`} className="mb-1 block text-sm text-neutral-400" key={item.id}>
                  {item.name}
               </Link>
            ))}
         </div>
         <div>
            <h3 className="mb-2 text-sm font-medium">Acessórios</h3>
            {NAV_ITEMS[2].acessories?.map(item => (
               <Link href={`/productos?gender=mulher&${item.query}`} className="mb-1 block text-sm text-neutral-400" key={item.id}>
                  {item.name}
               </Link>
            ))}
         </div>
      </div>
   );
};

const ChlidrenMenu = () => {
   return (
      <div>
         <div className="flex gap-4">
            <div className="w-20">
               <h3 className="mb-2 text-sm font-medium">Tenis</h3>
               {NAV_ITEMS[0].shoes?.map(item => (
                  <Link href={`/productos?gender=crianca&${item.query}`} className="mb-2 block text-sm text-neutral-400" key={item.id}>
                     {item.name}
                  </Link>
               ))}

            </div>
            <div>
               <h3 className="mb-2 text-sm font-medium">Vestuario</h3>
               {NAV_ITEMS[1].close?.map(item => (
                  <Link href={`/productos?gender=crianca&${item.query}`} className="mb-1 block text-sm text-neutral-400" key={item.id}>
                     {item.name}
                  </Link>
               ))}
            </div>
            <div>
               <h3 className="mb-2 text-sm font-medium">Acessórios</h3>
               {NAV_ITEMS[2].acessories?.map(item => (
                  <Link href={`/productos?gender=crianca&${item.query}`} className="mb-1 block text-sm text-neutral-400" key={item.id}>
                     {item.name}
                  </Link>
               ))}
            </div>
         </div>
         <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
            <span>View more</span>
            <ArrowRight />
         </button>
      </div>
   );
};

const TABS = [
   {
      title: "Homem",
      Component: MensMenu,
   },
   {
      title: "Mulher",
      Component: WomensMenu,
   },
   {
      title: "Criança",
      Component: ChlidrenMenu,
   },
].map((n, idx) => ({ ...n, id: idx + 1 }));