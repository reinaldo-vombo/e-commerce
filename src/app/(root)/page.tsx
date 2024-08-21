

import Banner from "@/components/layout/Banner";
import CategoriesSection from "@/components/layout/CategoriesSection";
import ProductSection from "@/components/layout/ProductSection";
import RecentProducts from "@/components/layout/RecentProducts";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductSection />
      <RecentProducts />
      <CategoriesSection />
    </>
  );
}
