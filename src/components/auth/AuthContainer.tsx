'use client'
import { Logo } from '@/constant/svgIcons'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Login from './forms/Lognin'
import Register from './forms/Register'
import ResetPassword from './forms/ResetPassword'
import ForgotPasswor from './forms/ForgotPasswor';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Icons } from '@/constant/icons';

const variants = {
   enter: (direction: any) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
   }),
   center: {
      x: 0,
      opacity: 1,
   },
   exit: (direction: any) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
   }),
};

const AuthContainer = () => {
   const searchParams = useSearchParams();
   const paramView = searchParams.get('view')
   const [formView, setFormView] = useState('login')
   const getDirection = (view: string) => {
      if (view === 'register' && formView === 'login') return 1;
      if (view === 'login' && formView === 'register') return -1;
      if (view === 'reset' && formView === 'login') return 1;
      if (view === 'login' && formView === 'reset') return -1;
      return 0; // for the same view
   };
   // if(paramView && paramView === '')
   return (
      <section className='grid min-h-screen grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]'>
         <div className='flex items-center justify-center pb-4 pt-20 md:py-20'>
            <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
               <div className='flex items-center justify-center'>
                  <Logo width={80} height={80} />
               </div>
               <h1 className="mb-2 text-center text-4xl font-semibold">
                  {formView === 'login' && 'Faça login em sua conta'}
                  {formView === 'register' && 'Crie sua conta'}
                  {formView === 'reset' && 'Recuperação de conta'}
               </h1>
               <div className="overflow-hidden w-[27rem]">
                  {['login', 'register', 'reset', 'recover'].map((view) => (
                     formView === view && (
                        <motion.div
                           key={view}
                           custom={getDirection(view)}
                           initial="enter"
                           animate="center"
                           exit="exit"
                           variants={variants}
                           transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                           {view === 'login' && <Login view={setFormView} />}
                           {view === 'register' && <Register view={setFormView} />}
                           {view === 'recover' && <ForgotPasswor view={setFormView} />}
                           {view === 'reset' && <ResetPassword view={setFormView} />}
                        </motion.div>
                     )
                  ))}
               </div>
            </div>
         </div>
         <div className="group sticky top-4 m-4 h-80 overflow-hidden rounded-3xl rounded-tl-[4rem] bg-slate-950 md:h-[calc(100vh_-_2rem)]">
            <div className='relative h-full'>
               <motion.div
                  initial={false}
                  animate={{
                     x: formView === 'login' ? '100%' : 0
                  }}
                  transition={{ ease: 'easeInOut', duration: 0.5 }}
                  className='bg-slate-50 rounded-lg absolute inset-0 rounded-r-lg'
                  style={{
                     background: `url(/cover1.jpg)`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover'
                  }}
               />
               <motion.div
                  initial={false}
                  animate={{
                     x: formView === 'login' ? '0%' : '-100%'
                  }}
                  transition={{ ease: 'easeInOut', duration: 0.5 }}
                  className='bg-slate-50 absolute rounded-lg inset-0 rounded-r-lg'
                  style={{
                     background: `url(/cover2.jpg)`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover'
                  }}
               />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-slate-950/90 to-slate-950/0 p-8">
               <h2 className='mb-2 text-3xl font-semibold leading-[1.25] text-white lg:text-4xl'>Connecting Designers <br /> with Opportunities</h2>
               <p className='mb-6 max-w-md text-sm text-slate-300'>Bloop is the home of makers, making amazing things, and getting paid. Find your dream job with us.</p>
               <div className="w-fit">
                  <Link href='/' className='flex items-center gap-4 text-white'>
                     <Icons.arrowLeft width={20} />
                     Voltar a loja
                  </Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AuthContainer
