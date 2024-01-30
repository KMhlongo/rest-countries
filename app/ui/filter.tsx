'use client';

import Image from "next/image"
import DownArrow from '@/public/chevron-down-outline.svg'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Filter() {
    const [expanded, setExpanded] = useState(false);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    function handleClickRegion(region : string) {
        const params = new URLSearchParams(searchParams);
        params.set('query', region);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <>
            <div className="relative self-start pt-8 sm:pt-0">
                <div 
                    className="bg-LightModeElements dark:bg-DarkModeElements dark:text-DarkModeText shadow flex rounded py-2 px-4 hover:bg-slate-50"
                    onClick={() => {setExpanded(!expanded)}}>
                    <p className="mr-6">Filter by Region</p>
                    <Image src={DownArrow} width={12} height={12} alt=""/>
                </div>
                <div className={`${expanded ? "visible" : "invisible" } absolute bg-LightModeElements dark:bg-DarkModeElements text-DarkModeText shadow rounded w-full origin-top left-0 mt-1`}>
                    <ul>
                        <li 
                            className="hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-1 cursor-default text-LightModeText dark:text-DarkModeText"
                            onClick={() => {handleClickRegion('Africa')}}>
                                Africa
                        </li>
                        <li 
                            className="hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-1 cursor-default text-LightModeText dark:text-DarkModeText"
                            onClick={() => {handleClickRegion('America')}}>
                                America
                        </li>
                        <li 
                            className="hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-1 cursor-default text-LightModeText dark:text-DarkModeText"
                            onClick={() => {handleClickRegion('Asia')}}>
                            Asia
                        </li>
                        <li 
                            className="hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-1 cursor-default text-LightModeText dark:text-DarkModeText"
                            onClick={() => {handleClickRegion('Europe')}}>
                            Europe
                        </li>
                        <li 
                            className="hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-1 cursor-default text-LightModeText dark:text-DarkModeText"
                            onClick={() => {handleClickRegion('Oceania')}}>
                            Oceania
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}