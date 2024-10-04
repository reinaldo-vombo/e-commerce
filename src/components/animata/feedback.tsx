'use client'

import { Angry, Check, Frown, Laugh, Loader2, Smile } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { cn } from '@/lib/utils'
import { useSubmitFeedback } from '@/hooks/useSubmitFeedback'

const feedback = [
   { stars: 4, emoji: <Laugh size={16} className="stroke-inherit" /> },
   { stars: 3, emoji: <Smile size={16} className="stroke-inherit" /> },
   { stars: 2, emoji: <Frown size={16} className="stroke-inherit" /> },
   { stars: 1, emoji: <Angry size={16} className="stroke-inherit" /> }
]
type TFeedbackProps = {
   stars: null | number
   setStars: Dispatch<SetStateAction<number | null>>
}
export const Feedback = ({ stars, setStars }: TFeedbackProps) => {
   const textRef = useRef<HTMLTextAreaElement>(null)

   const [isSubmitted, setSubmissionState] = useState(false)
   const { submitFeedback, isLoading, isSent } = useSubmitFeedback()

   useEffect(() => {
      if (!stars) {
         //cleaning up textarea
         if (textRef.current) textRef.current!.value = ''
      }
   }, [stars])

   useEffect(() => {
      let timeout = null
      let submissionStateTimeout = null

      if (isSent) {
         setSubmissionState(true)

         //cleaning up textarea and customer stars state
         timeout = setTimeout(() => {
            setStars(null)
            if (textRef.current) textRef.current!.value = ''
         }, 2000)

         //cleaning up successful submission text 100ms later
         submissionStateTimeout = setTimeout(() => {
            setSubmissionState(false)
         }, 2200)
      }

      return () => {
         if (timeout) {
            clearTimeout(timeout)
         }
         if (submissionStateTimeout) {
            clearTimeout(submissionStateTimeout)
         }
      }
   }, [isSent])

   return (
      <motion.div
         layout
         initial={{ borderRadius: '2rem' }}
         animate={stars ? { borderRadius: '0.5rem' } : { borderRadius: '2rem' }}
         className={twMerge(
            'w-full overflow-hidden border py-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-950'
         )}>
         <span className="flex items-center justify-center gap-3 pl-4 pr-2">
            <div className="text-sm text-black dark:text-neutral-400">Like our service?</div>
            <div className="flex items-center text-neutral-400">
               {feedback.map((e) => (
                  <button
                     onClick={() => setStars((prev) => (e.stars === prev ? null : e.stars))}
                     className={twMerge(
                        stars === e.stars
                           ? 'bg-blue-100 stroke-blue-500 dark:bg-sky-900 dark:stroke-sky-500'
                           : 'stroke-neutral-500 dark:stroke-neutral-400',
                        'flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-blue-100 hover:stroke-blue-500 hover:dark:bg-sky-900 hover:dark:stroke-sky-500'
                     )}
                     key={e.stars}>
                     {e.emoji}
                  </button>
               ))}
            </div>
         </span>
         <motion.div
            aria-hidden={stars ? false : true}
            initial={{ height: 0, translateY: 15 }}
            className="px-2"
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            animate={stars ? { height: '195px', width: '100%' } : {}}>
            <AnimatePresence>
               {!isSubmitted ? (
                  <motion.span exit={{ opacity: 0 }} initial={{ opacity: 1 }}>
                     <textarea
                        ref={textRef}
                        placeholder="Your app is awesoooome"
                        className="min-h-32 w-full resize-none rounded-md border bg-transparent p-2 text-sm placeholder-neutral-400 focus:border-neutral-400 focus:outline-0 dark:border-neutral-800 focus:dark:border-white"
                     />
                     <div className="flex h-fit w-full justify-end">
                        <button
                           onClick={() => submitFeedback(stars!, textRef.current!.value || '')}
                           className={cn(
                              'mt-1 flex h-9 items-center justify-center rounded-md border bg-neutral-950 px-2 text-sm text-white dark:bg-white dark:text-neutral-950',
                              {
                                 'bg-neutral-500 dark:bg-white dark:text-neutral-500': isLoading
                              }
                           )}>
                           {isLoading ? (
                              <>
                                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                 Carregando
                              </>
                           ) : (
                              'Submeter'
                           )}
                        </button>
                     </div>
                  </motion.span>
               ) : (
                  <motion.div
                     variants={container}
                     initial="hidden"
                     animate="show"
                     className="flex h-full w-full flex-col items-center justify-start gap-2 pt-9 text-sm font-normal">
                     <motion.div
                        variants={item}
                        className="flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded-full bg-blue-500 dark:bg-sky-500">
                        <Check strokeWidth={2.5} size={16} className="stroke-white" />
                     </motion.div>
                     <motion.div variants={item}>Seu feedbackfoi recebido!</motion.div>
                     <motion.div variants={item}>Obrigado pela ajuda.</motion.div>
                  </motion.div>
               )}
            </AnimatePresence>
         </motion.div>
      </motion.div>
   )
}

const container = {
   hidden: { opacity: 0, y: 20 },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.2,
         staggerChildren: 0.04
      }
   }
}

const item = {
   hidden: { y: 10 },
   show: { y: 0 }
}


