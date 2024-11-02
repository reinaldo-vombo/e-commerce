import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { FEEDBACKS } from '@/constant/site-content';
import Stars from '../product/Stars';
import { ScrollArea } from '../ui/scroll-area';
import { Icons } from '@/constant/icons';

const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0 }}
         animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
         exit={{ opacity: 0, scale: 0 }}
         transition={{ duration: 0.5 }}
         className="modal"
         style={{
            position: 'fixed',
            top: '50%',
            margin: 'auto',
            right: '83px',
            left: '6px',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
         }}
      >
         <div className='mb-6 flex items-center justify-between'>
            <h2>Sua avalição é importante</h2>
            <button onClick={onClose}><Icons.x width={20} /></button>
         </div>
         <ScrollArea className='h-[300px]'>
            {FEEDBACKS.map((feed) => (
               <div className='mt-8' key={feed.id}>
                  <div className='flex flex-col items-center'>
                     <Stars length={feed.stars} />
                     <h3 className='base-semibold text-gray-400'>Reginalde - 22 Feb 2024</h3>
                  </div>
                  <div className='mt-6'>
                     <h3 className='base-semibold text-center'>{feed.replay}</h3>
                  </div>
               </div>
            ))}
         </ScrollArea>
      </motion.div>
   );
};
type TProps = {
   trigger: ReactNode;
   children?: ReactNode;
}
const MobilePostFeedback = ({ trigger, children }: TProps) => {
   const [isOpen, setIsOpen] = useState(false);

   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);

   return (
      <div>
         <motion.button
            onClick={handleOpen}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className='text-base cursor-pointer rounded-full p-5 bg-slate-100'

         >
            {trigger}
         </motion.button>

         {isOpen && (
            <motion.div
               className="modal-overlay flex"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.5 }}
               style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 999,
               }}
               onClick={handleClose}
            >
               <Modal isOpen={isOpen} onClose={handleClose} />
            </motion.div>
         )}
      </div>
   );
};

export default MobilePostFeedback;
