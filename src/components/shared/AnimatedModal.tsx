// Modal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

type ModalProps = {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
   layoutId: string;
}

const ModalTansition: React.FC<ModalProps> = ({ isOpen, onClose, children, layoutId }) => {
   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               layoutId={layoutId}
               initial={{ scale: 0.5, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.5, opacity: 0 }}
               className="fixed inset-0 bg-white flex justify-center items-center z-50"
               onClick={onClose}
            >
               <div
                  className="relative w-full h-full max-w-lg max-h-full"
                  onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
               >
                  {children}
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default ModalTansition;
