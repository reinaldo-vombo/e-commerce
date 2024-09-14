import Footer from "@/components/layout/Footer";
import Header from "@/components/Navbar/Header";
import { LayoutProp } from "@/types";
import { Fragment } from "react";


export default function MainLayout({ children }: LayoutProp) {
   return (
      <Fragment>
         <Header />
         <main>
            {children}
         </main>
         <Footer />
      </Fragment>
   )
}
