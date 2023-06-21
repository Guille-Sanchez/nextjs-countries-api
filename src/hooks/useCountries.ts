import { parseCountriesData } from '@/logic/parseCountriesData'
import countriesData from '../../Challenge/data.json'
import { CountriesApi, FormattedCountries } from '../../types'

export const useCountries = async (): Promise<FormattedCountries> => {
  const res = await fetch('https://restcountries.com/v3.1/all')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const countries: CountriesApi = await res.json()

  return parseCountriesData({ countries })
}
