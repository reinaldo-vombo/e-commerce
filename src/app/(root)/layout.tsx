import Footer from "@/components/layout/Footer";
import Header from "@/components/Navbar/Header";
import { LayoutProp } from "@/types";
import { Fragment } from "react";


export default function MainLayout({ children }: LayoutProp) {
   return (
      <Fragment>
         <Header />
         <main className="px-4 sm:px-0">
            {children}
         </main>
         <Footer />
      </Fragment>
   )
}
