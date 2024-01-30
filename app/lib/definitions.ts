export type country = {
    flags: Flags;
    name: Name;
    capital: string[];
    region: string;
    population: number;
    subregion?: string;
    languages?: any;
    currencies?: any;
    borders?: string[];
    tld?: string[];
}
export type NameWrapper = {
    name: Name;
}
export type Name =  {
    common: string;
    official: string;
    nativeName: NativeName;
}
export type NativeName = {
    cat: Cat;
}
export type Cat = {
    official: string;
    common: string;
}
export type Flags = {
    png: string;
    svg: string;
    alt: string;
}
export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';
