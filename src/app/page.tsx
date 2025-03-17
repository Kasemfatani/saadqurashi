import React from 'react';
import Hero from '@/components/home/Hero';
import Who from '@/components/home/Who';
import Partners from '@/components/home/Partners';
import Touch from '@/components/home/Touch';
import Solutions from '@/components/home/Solutions';
import Blogs from '@/components/home/Blogs';
import CaseStudies from '@/components/home/CaseStudies';
import Why from '@/components/home/Why';
import Ncit from '@/components/home/Ncit';
export default function Home() {
  return (
    <main>
     <Hero />
     <Solutions />
     <Who />
     <Ncit />
     <Why />
     <Partners />
     <CaseStudies />
     <div className="main-touch">
     <Touch text= 'non' />
     </div>
     <Blogs />
    </main>
  );
}
