
import Image from "next/image"
import ProductHeader from "../product/ProductHeader"
import ProductCarousel from "../shared/Carousel"
import Expandable from "../animata/expandable"

const RecentProducts = () => {
  return (
    <section className="padding">
      <div className="container space-y-6">
        <div>
          <Image src={'/sportbanner.jpg'} className="rounded-md w-full" width={1247} height={433} alt="sport banner image" />
        </div>
        <ProductHeader />
        <ProductCarousel />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 flex flex-col justify-center p-12">
            <h1 className="text-6xl font-bold mb-4">Air Max</h1>
            <p className="text-lg mb-8">
              Explore the family. Experience the new look for every walk.
            </p>
            <button className="px-6 py-2 bg-black text-white text-lg">
              Shop Noww
            </button>
          </div>
          <div className="col-span-8">
            <Expandable />
          </div>
        </div>

      </div>
    </section>
  )
}

export default RecentProducts
