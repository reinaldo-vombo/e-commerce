

import Banner from "@/components/layout/Banner";
import CategoriesSection from "@/components/layout/CategoriesSection";
import NewsLatter from "@/components/layout/NewsLatter";
import ProductSection from "@/components/layout/ProductSection";
import RecentProducts from "@/components/layout/RecentProducts";
import NavigationTab from "@/components/mobile/bottomNav/NavigationTab";
import FitersSection from "@/components/mobile/FitersSection";
import MobileNav from "@/components/mobile/TopNav";

export default function Home() {
  return (
    <>
      <MobileNav title="Discover" />
      <Banner />
      <FitersSection />
      <ProductSection />
      <RecentProducts />
      <CategoriesSection />
      <NewsLatter />
      <NavigationTab />
    </>
  );
}
