import React from 'react';
import Hero from '@/components/home/Hero';
import Who from '@/components/home/Who';
import Partners from '@/components/home/Partners';
import Touch from '@/components/home/Touch';
import Solutions from '@/components/home/Solutions';
import Blogs from '@/components/home/Blogs';
export default function Home() {
  
  return (
    <main>
     <Hero />
     <Solutions />
     <Who />
     <Partners />
     {/* <Touch /> */}
     <Blogs />
    </main>
  );
}
