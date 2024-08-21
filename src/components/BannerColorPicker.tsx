import { useAnimation, motion } from 'framer-motion';
import React, { useState } from 'react'

const BannerColorPicker = ({ SelectedColor }: any) => {
   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
   const controls = useAnimation();

   const menuItems = ['#ff0000', '#0066ff', '#f76d07', '#f707d7'];
   const angleStep = 360 / menuItems.length;

   const handleClick = (index: number, color: string) => {
      setSelectedIndex(index);
      SelectedColor(color)
      // Calculate the rotation angle so that the selected item is on the left
      const rotationAngle = (angleStep * index) - 90; // Adjust for positioning on the left
      controls.start({
         rotate: -rotationAngle,
         transition: { duration: 0.5 }
      });
   };
   return (
      <div className='absolute top-0 bottom-0 right-[29px] z-10'>
         <div className="circular-menu-container">
            <motion.div
               className="circular-menu"
               animate={controls}
               transition={{ duration: 0.5 }}
            >
               {menuItems.map((item, index) => (
                  <motion.div
                     key={index}
                     className={`menu-item ${selectedIndex === index ? 'active-color' : ''}`}
                     style={{ background: item }}
                     onClick={() => handleClick(index, item)}
                  />
               ))}
            </motion.div>
         </div>
      </div>
   )
}

export default BannerColorPicker
