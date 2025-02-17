import Head from 'next/head';
import type { Metadata } from 'next';
import './globals.css';
import './video-react.css';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/main.css';


export async function generateMetadata(): Promise<Metadata> {
  const lang = typeof window !== 'undefined' && localStorage.getItem('lang') === 'ar' ? 'ar' : 'en';
  return {
    title: lang === 'ar' ? 'مسيره' : 'Masira',
    keywords: "masira",
    description: "masira",
    openGraph: {
      title: "Masira",
      description: 'masira',
      url: 'https://www.mzarapp.com',
      siteName: "Masira",
      // images: [
      //   {
      //     url: mzarImg.src,
      //     width: 1200,
      //     height: 630,
      //     alt: lang === 'ar' ? 'مزار - واجهة ومسار' : 'Mzar - A destination and path',
      //   },
      // ],
      type: 'website',
      locale: lang === 'ar' ? 'ar_EG' : 'en_US',
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
      </body>
    </html>
  );
}
