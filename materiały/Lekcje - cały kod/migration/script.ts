import { Country, CountryExtendedInfo } from './country';
import { countries } from './countries';

const filterCountriesByArea = (): Country[] => countries.filter(({area}) => area < 30000 || area > 100000);

const filterCountriesFromEurope = (): Country[] => countries.filter(({region}) => region === 'Europe');

const filterCapitalByLetter = (letter: string) => (country: Country): boolean => country.capital.startsWith(letter);

const getCountriesExtendedInfo = (): CountryExtendedInfo[] => {
    return countries.map(({ name, borders, timezones }) => {
        return {
            name,
            neighbors: borders.length > 0 ? borders.join(' ') : 'NONE',
            timezoneInfo: `Strefa czasowa ${timezones.join()}`
        }
    });
}

const getCountriesShortInfo = () => countries.map(({ name, population }) => `${name} ma powierzchnię country.area km2 a populacja wynosi ${population}`);

const getTotalPopulation = () => countries.reduce((acc, next) => acc + next.population, 0);

const getPolishNeighborsPopulation = () => {
    return countries
        .filter(({ borders }) => borders.includes('POL'))
        .reduce((acc, next) => acc + next.population, 0);
}

const countriesByArea = filterCountriesByArea();
const countriesFromEurope = filterCountriesFromEurope();
const countriesWhereCapitalStartsWithF: Country[] = countries.filter(filterCapitalByLetter('F'));
const countriesWithExtendedInfo = getCountriesExtendedInfo();
const countriesWithShortInfo = getCountriesShortInfo();
const totalPopulation = getTotalPopulation();
const polishNeighborsPopulation = getPolishNeighborsPopulation();