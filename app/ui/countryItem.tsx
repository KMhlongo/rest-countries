import Image from "next/image";
import { country } from "../lib/definitions";

function  CountryItem({ country } : {
    country: country
}) {
    return(
        <div className="flex text-LightModeText dark:text-DarkModeText bg-LightModeElements dark:bg-DarkModeElements flex flex-col rounded overflow-hidden shadow max-w-[260px]">
            <Image 
                src={country.flags.svg} 
                className="aspect-[1.69/1] object-cover" 
                alt="Flag" 
                width={260} 
                height={160}/>
            <div className="p-4 overflow-hidden max-w-[260px] text-sm pb-8">
                <h2 className="font-extrabold pb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {country.name.common}
                </h2>
                <p className="pb-1"><span className="font-semibold">Population: </span>{country.population.toLocaleString()}</p>
                <p className="pb-1"><span className="font-semibold">Region: </span>{country.region}</p>
                <p className="pb-1"><span className="font-semibold">Capital: </span>{country.capital}</p>
            </div>
        </div>
    )
}

export default CountryItem;