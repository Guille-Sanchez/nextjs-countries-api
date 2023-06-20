import { CountriesDropdown } from './components/CountriesDropdown'
import { IconMagnify } from './components/Icons'

export default function Home() {
  return (
    <main>
      <form className='relative mx-5 mt-7 rounded-md overflow-hidden'>
        <input
          type='text'
          placeholder='Search for a country...'
          aria-label='Search for a country'
          className='w-full text-sm pl-16 py-3 bg-dark-mode-element placeholder:text-dark-mode-text text-dark-mode-text'
        />
        <button
          aria-label='Press to search country'
          className='absolute left-7 top-3 text-dark-mode-text'
        >
          <IconMagnify />
        </button>
      </form>

      <CountriesDropdown />
    </main>
  )
}
