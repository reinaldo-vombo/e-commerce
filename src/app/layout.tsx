import type { Metadata } from "next";
import { Inter, Archivo, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Suspense } from "react";
import Loading from "./loading";

const archivo = Archivo({ subsets: ["latin"], weight: ["500"], display: 'swap', variable: '--font-archivo' })
const montserrat = Archivo({ subsets: ["latin"], weight: ["200", "400", "500"], display: 'swap', variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: "Redxp | loja virtual",
  description: "Generated by create next app",
  authors: {
    name: "Reinaldo Vombo",
    url: "https://github.com/reinaldo-vombo",
  },
  keywords: ['ecommerce', 'loja virtual', 'tenis', 'roupa', '']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${archivo.className}`}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Toaster
          position="bottom-right"
        />
      </body>
    </html>
  );
}
