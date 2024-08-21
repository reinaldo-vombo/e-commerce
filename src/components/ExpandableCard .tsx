import React from 'react';

const ExpandableCard = () => {
   return (
      <div className="p-4">
         <div className="relative group overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md transition-transform duration-300 transform hover:scale-105">
            <div className="p-6">
               <h3 className="text-xl font-semibold mb-2">Card Title</h3>
               <p className="text-gray-700">This is a description of the card. It provides some details about the content.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
         </div>
      </div>
   );
};

export default ExpandableCard;
