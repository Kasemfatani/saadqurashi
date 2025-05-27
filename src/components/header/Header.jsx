'use client';
import React, { useEffect, useState } from 'react';
// import logo from '../../assets/images/home/logo.svg';

import Image from 'next/image';
import Link from 'next/link';
import { Globe, Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()

  let [lang, setLang] = useState('ar');
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     if (localStorage.getItem('lang') === 'ar' || localStorage.getItem('lang') === 'en') {
  //       setLang(localStorage.getItem('lang'));
  //       // localStorage.setItem('lang', 'en');
  //     }
  //     else {
  //       localStorage.setItem('lang', 'en');
  //       setLang('en');
  //     }
  //   }
  // }, [lang]);
  
  return (
    <header className={` header`} style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }} >
      <div className="container m-auto flex items-center gap-2 justify-between">
        <Link href="/"> 
          <Image 
            src="/text-logo-w.png" 
            alt="logo" 
            className="logo-img" 
            width={200} 
            height={45} 
            style={{ 
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              minWidth: '180px'
            }} 
          />
        </Link>
        {/* <div className="links">
          <Link href="/about" className={pathname === '/about' ? 'active' : 'normal-Link'}>{lang === 'en' ? 'About Us' : 'من نحن'}</Link>
          <Link href="/#soultions" className={pathname === '/#soultions' ? 'active' : 'normal-Link'}>{lang === 'en' ? 'Solutions' : 'الحلول'}</Link>
          <Link href="/#blogs" className={pathname === '/#about' ? 'active' : 'normal-Link'}>{lang === 'en' ? 'Blogs' : 'المقالات'}</Link>
          <Link href={"/#case_studies"} className={pathname === '/#case_studies' ? 'active' : 'normal-Link'}>{lang === 'en' ? 'Case Studies' : ' قصص النجاح'}</Link>
          {
            pathname === '/' ?
              <Link href="/contact" className='book-link' >{lang === 'en' ? 'Contact us' : 'اتصل بنا'}</Link>
              : null
          }
          <div
            className="lang-btn"
            onClick={() => {
              if (lang === 'en') {
                localStorage.setItem('lang', 'ar');
                setLang('ar');
              } else {
                localStorage.setItem('lang', 'en');
                setLang('en');
              }
              window.location.reload(); // Reloads the page
            }}
          >
            <Globe size={20} />
          </div>
        </div> */}

        {/* <Menu className='menu-bars' onClick={() => {
          document.querySelector('.side-menu').classList.toggle('side-menu-active')
          document.querySelector('.menu-bars').classList.toggle('hidden')
          document.querySelector('.menu-bars-X').classList.toggle('hidden')
        }} />
        <X className='menu-bars-X hidden' onClick={() => {
          document.querySelector('.side-menu').classList.toggle('side-menu-active')
          document.querySelector('.menu-bars').classList.toggle('hidden')
          document.querySelector('.menu-bars-X').classList.toggle('hidden')
        }} />
        <div className="side-menu" onClick={() => {
          document.querySelector('.side-menu').classList.toggle('side-menu-active')
          document.querySelector('.menu-bars').classList.toggle('hidden')
          document.querySelector('.menu-bars-X').classList.toggle('hidden')
        }}>
          <div className="links">
            <Link href="/" className={pathname === '/' ? 'active' : 'normal-Link'}>{lang === 'en' ? 'Home' : 'الرئيسية'}</Link>
            <Link href="/about" className={pathname === '/about' ? 'active' : 'normal-Link'}>{lang === 'en' ? 'About' : 'من نحن'}</Link>
            <Link href="/#soultions " className={pathname === '/#soultions ' ? 'active' : 'normal-Link'}>{lang === 'en' ? 'Solutions' : 'الحلول'}</Link>
            <Link href="/#blogs" className={pathname === '/#about' ? 'active' : 'normal-Link'}>{lang === 'en' ? 'Blogs' : 'المقالات'}</Link>
            <Link href="/#case_studies" className={pathname === '/#case_studies' ? 'active' : 'normal-Link'}>{lang === 'en' ? 'Case Studies' : ' قصص النجاح'}</Link>
            <Link href="/contact" className='book-link' >{lang === 'en' ? 'Contact us' : 'اتصل بنا'}</Link>

            <div
              className="lang-btn"
              onClick={() => {
                if (lang === 'en') {
                  localStorage.setItem('lang', 'ar');
                  setLang('ar');
                } else {
                  localStorage.setItem('lang', 'en');
                  setLang('en');
                }
                window.location.reload(); // Reloads the page
              }}
            >
              <Globe size={20} />
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
}
