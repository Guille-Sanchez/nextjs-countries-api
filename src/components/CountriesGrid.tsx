import { useCountries } from '@/hooks/useCountries'
import Image from 'next/image'
import Link from 'next/link'

export const CountriesGrid = () => {
  // Unnecesary lines while using mocking data and not fetching it
  // async (): Promise<JSX.Element> => {
  // const countries = await useCountries()
  const countries = useCountries()
  const countryInformation = ['Population', 'Region', 'Capital']

  return (
    <section title='Countries' className='w-full flex justify-center'>
      <ul
        className='w-full max-w-[1300px] flex flex-wrap gap-5 justify-center xl:justify-between mx-5 mt-7'
        style={{
          gap: 'clamp(1.25rem, -7.981rem + 14.423vw, 5rem)',
          marginTop: 'clamp(1.75rem, -0.096rem + 2.885vw, 2.5rem)'
        }}
      >
        {countries.map(country => {
          return (
            <li key={country.name}>
              <Link
                href={`/country/${country.name}`}
                className='overflow-hidden flex flex-col gap-5 rounded-sm bg bg-dark-mode-element shadow-md'
              >
                <div className='relative w-60 min-h-[120px] h-auto object-contain'>
                  <Image
                    src={country.flag}
                    alt={country.flagAlt}
                    fill={true}
                    sizes='240px'
                  />
                </div>

                <header>
                  <h2 className='px-5 text-dark-mode-text font-bold'>
                    {country.name}
                  </h2>
                </header>

                <ul className='flex flex-col gap-2 px-5 pb-5'>
                  {countryInformation.map(information => {
                    return (
                      <li key={information}>
                        <p className='text-opacity-80 text-sm text-dark-mode-text'>
                          <span className='font-bold text-sm text-dark-mode-text text-opacity-100'>
                            {information}
                          </span>{' '}
                          {
                            country[
                              information.toLowerCase() as keyof typeof country
                            ]
                          }
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
