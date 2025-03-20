import Head from 'next/head';
import type { Metadata } from 'next';
import './globals.css';
import './video-react.css';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/main.css';
import { Toaster } from "@/components/ui/sonner"
import logo from '/public/logo.png'
import { getSeoData } from '@/lib/getSeoData';

// ✅ Fetch metadata dynamically from the API
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getSeoData(); // Fetch data on the server
  return {
    title: seoData?.seo_title || 'i-Masirssssa',
    description: seoData?.seo_description || "i-Masira is a Saudi-based industrial solutions provider dedicated to driving the digital transformation of factories and enterprises across the Kingdom. With a focus on delivering cutting-edge technologies, strategic consultancy, and advanced training, we empower businesses to embrace Industry 4.0 and optimize every aspect of their operations.Aligns with Saudi Arabia’s National Transformation Plan and the Saudi Vision 2030 development agenda aims to transform local industries into Smart Industry standard.",
    keywords: seoData?.seo_keywords || "SCADA, SIRI ASSESSMENT",
    openGraph: {
      title: seoData?.seo_title || 'i-Masira',
      description: seoData?.seo_description || "i-Masira is a Saudi-based industrial solutions provider dedicated to driving the digital transformation of factories and enterprises across the Kingdom. With a focus on delivering cutting-edge technologies, strategic consultancy, and advanced training, we empower businesses to embrace Industry 4.0 and optimize every aspect of their operations.Aligns with Saudi Arabia’s National Transformation Plan and the Saudi Vision 2030 development agenda aims to transform local industries into Smart Industry standard.",
      url: 'https://i-masira.com/',
      siteName: "i-Masira",
      images: [
        {
          url: seoData?.seo_image || logo.src,
          width: 1200,
          height: 630,
          alt: 'i-Masira',
        },
      ],
      type: 'website',
      locale: 'ar_SA',
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
