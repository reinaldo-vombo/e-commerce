import { Icons } from "@/constant/icons"
import { HIDE_TEXTAREA, RATING_BTN } from "@/lib/motion"
import { motion } from "framer-motion"
import { useState } from "react"

const Comment = () => {
   const [comment, setcomment] = useState(false)
   return (
      <div className="grid">
         <motion.textarea rows={4} variants={HIDE_TEXTAREA} initial={false} animate={comment ? 'colapsed' : 'hidden'} transition={{ ease: 'linear' }} className="outline-slate-200 p-2" placeholder="O que acho deste produto" />
         <div className="flex justify-center mt-4">
            <motion.button
               variants={RATING_BTN}
               initial={false}
               animate={comment ? 'colapsed' : 'hidden'}
               type="button"
               className="bg-indigo-500 flex justify-center py-2 rounded-md text-white"
               aria-label="chat icon"
               onClick={() => setcomment(pv => !pv)}>
               {comment ? 'Comentar' : <Icons.chat width={20} fill="#fff" />}
            </motion.button>
         </div>
      </div>
   )
}

export default Comment
