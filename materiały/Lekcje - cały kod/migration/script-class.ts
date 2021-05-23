import { Country, CountryExtendedInfo } from './country';
import { countries } from './countries';

export class CountriesInformation {

    countriesByArea;
    countriesFromEurope = this.filterCountriesFromEurope();
    countriesWhereCapitalStartsWithF: Country[] = countries.filter(this.filterCapitalByLetter('F'));
    countriesWithExtendedInfo = this.getCountriesExtendedInfo();
    countriesWithShortInfo = this.getCountriesShortInfo();
    totalPopulation = this.getTotalPopulation();
    polishNeighborsPopulation = this.getPolishNeighborsPopulation();

    constructor() {
        this.filterCountriesByArea();
    }

    filterCountriesByArea() {
        this.countriesByArea = countries.filter(({area}) => area < 30000 || area > 100000);
    }

    filterCountriesFromEurope(): Country[] {
        return countries.filter(({region}) => region === 'Europe');
    }

    filterCapitalByLetter(letter: string) {
        return () => (country: Country): boolean => country.capital.startsWith(letter);
    }

    getCountriesExtendedInfo(): CountryExtendedInfo[] {
        return countries.map(({ name, borders, timezones }) => {
            return {
                name,
                neighbors: borders.length > 0 ? borders.join(' ') : 'NONE',
                timezoneInfo: `Strefa czasowa ${timezones.join()}`
            }
        });
    }

    getCountriesShortInfo() {
        return countries.map(({ name, population }) => `${name} ma powierzchnię country.area km2 a populacja wynosi ${population}`);
    }

    getTotalPopulation() {
        return countries.reduce((acc, next) => acc + next.population, 0);
    }

    getPolishNeighborsPopulation() {
        return countries
            .filter(({ borders }) => borders.includes('POL'))
            .reduce((acc, next) => acc + next.population, 0);
    }
}

const countriesInformation = new CountriesInformation();