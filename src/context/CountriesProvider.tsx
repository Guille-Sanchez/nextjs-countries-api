import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { CountryInitialState } from '../constants'
import { FormattedCountries } from '../../types'

const initialState = {
  countries: [{ ...CountryInitialState }],
  setCountries: () => {}
}

interface CountriesContextProps {
  countries: FormattedCountries
  setCountries: Dispatch<SetStateAction<FormattedCountries>>
}

export const CountryContext = createContext<CountriesContextProps>(initialState)

export const CountriesProvider = ({
  children
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [countries, setCountries] = useState([{ ...CountryInitialState }])

  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountryContext.Provider>
  )
}
