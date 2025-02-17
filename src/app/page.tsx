'use client'
import React, { useEffect, useState } from 'react';
import Hero from '@/components/home/Hero';
import Who from '@/components/home/Who';
import Partners from '@/components/home/Partners';
import Touch from '@/components/home/Touch';
import Solutions from '@/components/home/Solutions';
import Blogs from '@/components/home/Blogs';
import NotFound from './not-found';
export default function Home() {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('lang') === 'ar') {
        setLang('ar');
      }
      else if (localStorage.getItem('lang') === 'en') {
        setLang('en');
      }
      else {
        localStorage.setItem('lang', 'en');
      }
    }
  }, []);
  return (
    <main>
      <NotFound />
    </main>
  );
}
