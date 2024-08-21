import Image from "next/image"
import ProductHeader from "../product/ProductHeader"
import ProductCarousel from "../shared/Carousel"

const RecentProducts = () => {
   return (
      <section className="padding">
         <div className="container space-y-6">
            <div>
               <Image src={'/sportbanner.jpg'} className="rounded-md w-full" width={1247} height={433} alt="sport banner image" />
            </div>
            <ProductHeader />
            <ProductCarousel />
            {/* <div className="w-1/3 flex flex-col justify-center p-12">
        <h1 className="text-6xl font-bold mb-4">Air Max</h1>
        <p className="text-lg mb-8">
          Explore the family. Experience the new look for every walk.
        </p>
        <button className="px-6 py-2 bg-black text-white text-lg">
          Shop Now
        </button>
      </div>
      <div className="w-2/3 flex items-center justify-center relative">
        {shoes.map((shoe, index) => (
          <motion.div
            key={shoe.id}
            className={`absolute w-1/2 h-full flex items-center justify-center overflow-hidden rounded-xl ${index === 0 ? 'left-0' : 'right-0'}`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={shoe.imageUrl}
              alt={shoe.name}
              className="object-cover h-4/5"
            />
            <span className="absolute text-[120px] font-extrabold text-white opacity-10">
              {index === 0 ? '95' : '90'}
            </span>
          </motion.div>
        ))}
      </div> */}
         </div>
      </section>
   )
}

export default RecentProducts
