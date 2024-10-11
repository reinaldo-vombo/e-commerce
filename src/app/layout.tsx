import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Suspense } from "react";
import Loading from "./loading";

const archivo = Archivo({ subsets: ["latin"], weight: ["500"], display: 'swap', variable: '--font-archivo' })
const montserrat = Archivo({ subsets: ["latin"], weight: ["200", "400", "500"], display: 'swap', variable: '--font-montserrat' })
// const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
//   : 'http://localhost:3000';
export const metadata: Metadata = {
  metadataBase: new URL('https://e-commerce-eta-lilac.vercel.app/'),
  title: {
    template: '%s | Redxp',
    default: 'Redxp | Loja Online', // a default is required when creating a template
  },
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  applicationName: 'Redxp',
  description: 'Em vez de ir aos shoppings locais para fazer compras, cada vez mais pessoas estão usando a variedade de produtos on-line.',
  authors: {
    name: "Reinaldo Vombo",
    url: "https://github.com/reinaldo-vombo",
  },
  creator: 'Reinaldo Vombo',
  publisher: 'Reinaldo Vombo',
  openGraph: {
    title: 'Redxp',
    description: 'Em vez de ir aos shoppings locais para fazer compras, cada vez mais pessoas estão usando a variedade de produtos on-line.',
    images: './opengraph-image.png',
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt': '/pt-PT'
    }
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'Reinaldo vombo',
    site: ''
  },
  keywords: ['ecommerce', 'loja virtual', 'tenis', 'roupa', 'acessórios']
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
