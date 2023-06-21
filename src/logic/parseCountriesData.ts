import { CountriesApi, FormattedCountries } from '../../types'

interface Props {
  countries: CountriesApi
}

export const parseCountriesData = ({
  countries
}: Props): FormattedCountries => {
  const countryFormatter = countries.map(country => {
    const nativeName =
      country.name.nativeName === undefined
        ? ''
        : Object.values(country.name.nativeName)[0].common
    const capital = country.capital === undefined ? '' : country.capital[0]

    return {
      alpha3Code: country.cca3,
      borders: country.borders,
      capital: capital,
      currencies: Object.keys(country?.currencies ?? [''])?.join(', ') ?? '',
      flag: country.flags.png,
      flagAlt: country.flags?.alt ?? country.name.common,
      languages: Object.values(country?.languages ?? [''])?.join(', ') ?? '',
      name: country.name.common,
      nativeName: nativeName,
      population: country.population,
      region: country.region,
      subregion: country?.subregion ?? '',
      topLevelDomain: country.tld?.join(', ') ?? ''
    }
  })

  return countryFormatter
}
