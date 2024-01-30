'use client';

import { KeyboardEvent, ChangeEvent, useState } from "react";
import Image from "next/image";
import Magnify from '@/public/search-outline.svg'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchQuery(e.target.value);
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            const params = new URLSearchParams(searchParams);
            if (searchQuery) {
                params.set('query', searchQuery)
            } else {
                params.delete('query');
            }
            replace(`${pathname}?${params.toString()}`)
        }
    }

    return (
        <div className="bg-LightModeElements dark:bg-DarkModeElements shadow flex items-center py-2 px-6 rounded w-full md:w-fit">
            <Image src={Magnify} width={18} height={18} alt="search" className="mr-6"/>
            <input 
              className="focus:outline-none dark:bg-DarkModeElements dark:text-DarkModeText"
              placeholder="Search for a country..." 
              type="text"
              onChange={(e) => {handleOnChange(e)}} 
              onKeyDown={(e) => {handleKeyDown(e)}}/>
        </div>
    )
}