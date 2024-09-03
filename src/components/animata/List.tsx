import Image from "next/image";
import WaveReveal from "./wave-reveal";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
   item: { image: string; title: string };
   index: number;
   activeItem: number;
}

export const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
   return (
      <div
         className={cn(
            "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
            {
               "flex-grow": index === activeItem,
            },
            className,
         )}
         {...props}
      >
         <Image
            src={item.image}
            alt={item.title}
            fill
            className={cn("h-full w-full object-cover", {
               "blur-[2px]": index !== activeItem,
            })}
         />
         {index === activeItem && (
            <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
               <WaveReveal
                  duration="1000ms"
                  className="items-start justify-start text-xl sm:text-2xl md:text-6xl"
                  text={item.title}
                  direction="up"
               />
            </div>
         )}
      </div>
   );
};