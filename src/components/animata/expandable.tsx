'use client'
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ExpandableProps } from "../types";
import { List } from "./List";

const items = [
   {
      image:
         "/product/AIR+JORDAN+1+MID.jpg",
      title: "Mountains",
   },
   {
      image:
         "/product/AIR+JORDAN+1+MID.jpg",
      title: "Great Wall of China",
   },
   {
      image:
         "/product/AIR+JORDAN+1+MID.jpg",
      title: "Texture & Patterns",
   },
];

export default function Expandable({ list = items, autoPlay = true, className }: ExpandableProps) {
   const [activeItem, setActiveItem] = useState(0);
   const [isHovering, setIsHovering] = useState(false);

   useEffect(() => {
      if (!autoPlay) {
         return;
      }

      const interval = setInterval(() => {
         if (!isHovering) {
            setActiveItem((prev) => (prev + 1) % list.length);
         }
      }, 5000);

      return () => clearInterval(interval);
   }, [autoPlay, list.length, isHovering]);

   return (
      <div className={cn("flex h-96 w-full gap-1", className)}>
         {list.map((item, index) => (
            <List
               key={item.title}
               item={item}
               index={index}
               activeItem={activeItem}
               onMouseEnter={() => {
                  setActiveItem(index);
                  setIsHovering(true);
               }}
               onMouseLeave={() => {
                  setIsHovering(false);
               }}
            />
         ))}
      </div>
   );
}
