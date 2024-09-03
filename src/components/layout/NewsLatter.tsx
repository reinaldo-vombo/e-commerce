'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { AnimatedSubscribeButton } from '../Buttons/SubscribeButton'

const NewsLatter = () => {
   const [isSubmiting, setIsSubmiting] = useState(false)

   const handleSubscribe = () => {
      setIsSubmiting(true)
   }
   return (
      <section className='bg-black'>
         <div className="padding container">
            <div className='text-white text-center'>
               <h1 className='uppercase h2-bold'>Adere e receba 10% de desconto</h1>
               <p>Receba novidade sobre artigo e atualizações na tua caixa de entrada</p>
               <div className="flex justify-center mt-6">
                  <div className='w-1/2 flex items-center gap-4'>
                     <Input type='email' placeholder='Seu email' />
                     <AnimatedSubscribeButton
                        onClick={handleSubscribe}
                        subscribeStatus={isSubmiting}
                        buttonColor='red'
                        changeText='Subscrito'
                        initialText='Subscrever'
                     />

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NewsLatter
