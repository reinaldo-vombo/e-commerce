import Footer from "@/components/layout/Footer";
import Header from "@/components/Navbar/Header";
import { LayoutProp } from "@/types";


export default function MainLayout({ children }: LayoutProp) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}
