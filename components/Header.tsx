import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.png';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full py-4 px-8 border-b border-[#272240] sticky top-0 z-50 text-sm">
        <div className='flex items-center gap-2'>
            <Image src={logo} className='w-10' alt='logo' />
            <Link href="/">Reflect</Link>
        </div>
        <nav className='flex border gap-4 rounded-full py-2 px-4 border-[#272240] font-normal'>
            <Link href="#product">Product</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#company">Company</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#changelog">Changelog</Link>
        </nav>
        <div className='flex gap-4 items-center'>
            <div>Login</div>
            <div className='border p-2 rounded-xl border-[#493A72]'>Start free trail</div>
        </div>
    </header>
  );
}