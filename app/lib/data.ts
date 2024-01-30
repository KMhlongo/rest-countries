import { type } from "os";
import { Region, country, Name, NameWrapper } from "./definitions";

export async function fetchAllCountries(query: string | Region) {
    
    function isRegion(input : any) : input is Region {
        return ['Africa','America','Asia','Europe','Oceania'].includes(input);
    }

    let urlrequest: string;
    if (query == '') {
        urlrequest = 'all';
    } else if (isRegion(query)) {
        urlrequest = `region/${query}`;
        console.log('region picked in dropdown')
    } 
    else {
        urlrequest = `name/${query}`
    }

    try {
        const response = await fetch(`https://restcountries.com/v3.1/${urlrequest}?fields=name,flags,population,region,capital`);
        const countries : Promise<country[]> = response.json();
        return countries;
    } catch(error) {
        console.log(error)
        throw new Error('Failed to fetch countries');
    }
}

export async function fetchCountryInfo(name: string) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        const country: Promise<country[]> = response.json();
        return country; 
    } catch(error) {
        console.log(error)
        throw new Error('Failed to fetch country info')
    }
}

export async function fetchCountryNameByCode(code: string) {
    console.log("called fetch country name");
    try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=name`)
        const countryName : Promise<NameWrapper> = response.json();
        return countryName;
    } catch(error) {
        console.log(error)
        throw new Error('Failed to fetch country name');
    }
}