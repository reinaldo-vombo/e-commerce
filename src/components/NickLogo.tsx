
import { motion } from 'framer-motion';

const NikeLogoDraw = () => {

   const pathVariants = {
      hidden: { pathLength: 0 },
      visible: {
         pathLength: 1,
         transition: { duration: 2, ease: "easeInOut" },
      },
   };
   return (
      <div>

         <svg
            width={854}
            height={575}
            viewBox="0 0 854 575"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M27.9647 84.4862C-26.2802 184.336 -76.2001 306.801 -69.9036 394.928C-67.5423 428.087 -57.2146 456.388 -36.1565 476.788C-5.84839 506.171 4.44364 609.375 34.9723 607.053C79.5844 603.646 122.031 576.573 155.288 555.656C211.298 520.444 849.412 7.64487 849.412 7.64487C855.322 3.06311 853.755 -1.9473 846.158 1.20929C843.093 2.48717 162.825 305.992 162.825 305.992C149.956 311.946 136.461 315.59 122.7 316.825C68.9576 321.449 18.0432 286.032 11.9756 203.482C9.5998 171.181 14.0882 131.653 27.9647 84.4862Z"
               fill="black"
            />
         </svg>
      </div>
   )
}

export default NikeLogoDraw
