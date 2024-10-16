import { Star } from "lucide-react"
import { TStarRatingProps } from './types'

const StarRating = ({ name, rating, setRating }: TStarRatingProps) => {
   return (
      <div className="flex items-center space-x-1">
         {[1, 2, 3, 4, 5].map((star) => (
            <Star
               key={star}
               className={`w-6 h-6 cursor-pointer ${star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
               onClick={() => setRating(star)}
            />
         ))}
         <input type="hidden" name={name} value={rating} />
      </div>
   )
}

export default StarRating
