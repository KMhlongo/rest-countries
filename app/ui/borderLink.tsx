import { fetchCountryNameByCode } from "../lib/data"
import { Name, NameWrapper } from "../lib/definitions";
import Link from "next/link";

export default async function BorderLink({
    code
} : {code: string}) {

    const countryName:NameWrapper = await fetchCountryNameByCode(code).then((data) => {return data});

    return(
        <Link 
            href={`/country/${countryName.name.common}`} 
            className="px-6 bg-LightModeElements shadow hover:shadow-md rounded mx-2 my-2 dark:bg-DarkModeElements items-center md:mt-0 mt-4">
            {countryName.name.common}
        </Link>
    )

}