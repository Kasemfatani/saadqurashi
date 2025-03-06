import Head from 'next/head';
import type { Metadata } from 'next';
import './globals.css';
import './video-react.css';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/main.css';
import { Toaster } from "@/components/ui/sonner"
import logo from '/public/footerlogo.svg'

export async function generateMetadata(): Promise<Metadata> {
  const lang = typeof window !== 'undefined' && localStorage.getItem('lang') === 'ar' ? 'ar' : 'en';
  return {
    title: lang === 'ar' ? 'مسيره' : 'i-Masira',
    keywords: "i-Masira",
    description: "i-Masira",
    openGraph: {
      title: "i-Masira",
      description: 'i-Masira',
      url: 'https://i-masira.com/',
      siteName: "Masira",
      images: [
        {
          url: logo.src,
          width: 1200,
          height: 630,
          alt: 'i-Masira',
        },
      ],
      type: 'website',
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="root">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className="w-full" suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
