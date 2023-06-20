import { parseCountriesData } from '../logic/parseCountriesData'
import Image from 'next/image'

export const CountriesGrid = (): JSX.Element => {
  const countries = parseCountriesData()

  return (
    <section title='Countries' className='w-full flex justify-center'>
      <ul className='w-full max-w-[1400px] flex flex-wrap gap-5 justify-center gap-y mx-5 mt-7'>
        {countries.map(country => {
          return (
            <li
              key={country.name}
              className='overflow-hidden flex flex-col gap-5 rounded-sm bg bg-dark-mode-element'
            >
              <div className='relative w-72 min-h-[144px] h-auto object-contain'>
                <Image
                  src={country.flag}
                  alt={country.flagAlt}
                  fill={true}
                  sizes='288px'
                />
              </div>

              <header>
                <h2 className='px-5 text-dark-mode-text font-bold'>
                  {country.name}
                </h2>
              </header>

              <div className='px-5 pb-5'>
                <p className='text-opacity-80 text-sm text-dark-mode-text'>
                  <span className='font-bold text-sm text-dark-mode-text text-opacity-100'>
                    Population:
                  </span>{' '}
                  {country.population}
                </p>
                <p className='text-opacity-80 text-sm text-dark-mode-text'>
                  <span className='font-bold text-sm text-dark-mode-text text-opacity-100'>
                    Region:
                  </span>{' '}
                  {country.region}
                </p>
                <p className='text-opacity-80 text-sm text-dark-mode-text'>
                  <span className='font-bold text-sm text-dark-mode-text text-opacity-100'>
                    Capital:
                  </span>{' '}
                  {country.capital}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
