import { useState } from "react"
import { motion } from "framer-motion"
import { SHOW_RATING } from "@/lib/motion"
import CardBody from "../shared/CardBody"
import confetti from "canvas-confetti";
import { Feedback } from "../animata/feedback";

const CardRating = () => {
   const [ratingMoadal, setRatingModal] = useState(false)
   const [stars, setStars] = useState<null | number>(null)

   return (
      <div className="relative" onMouseLeave={() => setRatingModal(false)}>
         <div className="flex items-center gap-2 cursor-pointer" onMouseEnter={() => setRatingModal(true)}>
            <span>(5/{stars})</span>
            {Array.from({ length: stars ? stars : 5 }).map((_, index) => (
               <div key={index}>
                  <svg className={`w-4 h-4 ${stars ? 'text-yellow-300' : 'text-[#D6D8DF]'} ms-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                     <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
               </div>
            ))}
         </div>
         <motion.div initial={false} variants={SHOW_RATING} animate={ratingMoadal ? 'show' : 'hidden'} className="absolute rounded-lg bg-white shadow-sm z-20 top-5">
            <CardBody className="space-y-3">
               <div className="space-y-4">
                  <p className="font-semibold text-sm">Que pontuação darias a esté item (5/{stars})</p>
                  <Feedback setStars={setStars} stars={stars} />
               </div>
            </CardBody>
         </motion.div>
      </div>
   )
}

export default CardRating
