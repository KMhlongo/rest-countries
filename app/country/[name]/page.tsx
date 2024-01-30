'use client';

import { fetchCountryInfo } from "@/app/lib/data";
import CountryInfo from "@/app/ui/countryInfo";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Arrow from '@/public/arrow-back-outline.svg'
import { Suspense } from "react";

export default function Page({params}: {params: {name: string}}) {
    const router = useRouter();

    return (
        <div className=" px-4 md:px-16 h-screen">
            <div className="flex pt-8">
                <div className="flex items-center bg-LightModeElements dark:bg-DarkModeElements dark:text-DarkModeText py-2 px-6 shadow hover:shadow-md rounded cursor-default" 
                    onClick={() => {router.back()}}>
                    <Image src={Arrow} width={18} height={18} alt="back arrow" className="mr-4"/>
                    <p>Back</p>
                </div>
            </div>
            <Suspense>
                <CountryInfo name={params.name} />
            </Suspense>
        </div>
    )
}