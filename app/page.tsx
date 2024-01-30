import { fetchAllCountries } from "./lib/data";
import CountryItem from "./ui/countryItem";
import Link from "next/link";
import Search from "./ui/search";
import Filter from "./ui/filter";
import { Region } from "./lib/definitions";

export default async function Home({ 
  searchParams
}: {
  searchParams?: {
    query?: string | Region
  }
}) {

  const query = searchParams?.query || '';
  const countries = await fetchAllCountries(query);
  
  return (
    <main className="md:px-16 px-4">
      <div className="flex md:justify-between items-center pt-8 md:flex-row flex-col">
        <Search />
        <Filter />
      </div>
      <div className="flex flex-col items-center md:grid lg:grid-cols-4 md:grid-cols-2 pt-8 lg:gap-20 md:gap-x-48 md:gap-y-20 gap-y-12">
        {countries.map((country) => (
          <Link className="max-w-[260px]"
            key={country.name.common} 
            href={`/country/${country.name.common}`}>
            <CountryItem country={country}/>
          </Link>
        ))}
      </div>
    </main>
  );
}
