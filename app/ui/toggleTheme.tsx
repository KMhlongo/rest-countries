'use client';

import MoonOutline from '@/public/moon-outline.svg'
import { useTheme } from 'next-themes';
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function ToggleTheme() {
    const { setTheme, resolvedTheme } = useTheme();

    function handleClick() {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    }

    return(
        <div 
            className='ml-auto flex justify-center items-center'
            onClick={handleClick}>
              <Image src={MoonOutline} width={12} height={12} alt=""/>
              <p className='font-semibold pl-2'>Dark Mode</p>
        </div>
    )
}