import { fetchCountryInfo } from "../lib/data";
import Image from "next/image";
import Link from "next/link";
import BorderLink from "./borderLink";
import { Suspense } from "react";

export default async function CountryInfo({name} : {name: string}) {
    const country = await fetchCountryInfo(name).then((data) => {return data[0]});
    const languages: string[] = Object.values(country.languages)
    const currencies: string[] = [];
    if (country.currencies) {
        Object.entries(country.currencies).forEach(([code, cur]) => {
            const {name} = cur;
            currencies.push(name)
        })
    }
    

    return(
        <div className="flex pt-8 flex-col sm:flex-row">
            <div className="flex-1">
                <Image src={country.flags.svg} width={560} height={400} alt="flag"/>
            </div>
            <div className="flex-1">
                <h1 className="text-2xl font-extrabold py-8">{country.name.common}</h1>
                <div className="md:grid md:grid-rows-5 md:grid-flow-col">
                    {/* <p className="py-1">
                        <span className="font-semibold">Native Name:</span> {country.name.nativeName.cat.common}
                    </p> */}
                    <p className="py-1">
                        <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
                    </p>
                    <p className="py-1">
                        <span className="font-semibold">Region:</span> {country.region}
                    </p>
                    <p className="py-1">
                        <span className="font-semibold">Sub Region:</span> {country.subregion}
                    </p>
                    <p className="md:pt-1 md:pb-1 pt-1 pb-6">
                        <span className="font-semibold">Capital:</span> {country.capital}
                    </p>
                    <p className="py-1">
                        <span className="font-semibold">Top Level Domain:</span> {country.tld}
                    </p>
                    <div className="py-1 flex">
                        <span className="font-semibold">Currencies:</span> 
                        {currencies.map((cur, index) => (
                            <p key={index} className="px-1"> {cur.toString()}</p>
                        ))}
                    </div>
                    <div className="py-1 flex">
                        <span className="font-semibold">Languages:</span> 
                        {languages.map((lan, index) => (
                            <p key={index} className="px-1"> {lan.toString()}</p>
                        ))}
                    </div>
                </div>
                <div className="md:flex md:pt-8 pt-6">
                    <span className="font-semibold min-w-fit flex items-center">Border Countries :</span> 
                    <Suspense>
                        <div className="flex flex-wrap">
                            {country.borders?.map((code) => (
                                <BorderLink code={code} key={code}/>
                            ))}
                        </div>
                    </Suspense>
                </div>
        </div>
        </div>
    )

}