import type { Metadata } from 'next';
import './globals.css';
import './video-react.css';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/main.css';
import { Toaster } from "@/components/ui/sonner";
import new_logo from '/public/new-logo.png';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'شركة سعد جميل القرشي',
    description: "شركة سعد جميل القرشي",
    keywords: "شركة سعد جميل القرشي",
    openGraph: {
      title: "شركة سعد جميل القرشي",
      description: "شركة سعد جميل القرشي",
      url: '',
      siteName: "شركة سعد جميل القرشي",
      images: [
        {
          url: new_logo.src,
          width: 1200,
          height: 630,
          alt: "شركة سعد جميل القرشي",
        },
      ],
      type: 'website',
      locale: 'ar_SA',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" id="root" dir="rtl">
      <head>
        <meta name="facebook-domain-verification" content="01paj7mvvqkphps5bwjhbrwjxouepi" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/new-logo.png" /> 
      </head>
      <body className="w-full" suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
