import { IconMagnify } from './Icons'

export const SearchCountry = (): JSX.Element => {
  return (
    <form className='relative w-full max-w-[550px] bg-dark-mode-bg'>
      <div className='bg-dark-mode-bg shadow-md'>
        <input
          type='text'
          placeholder='Search for a country...'
          aria-label='Search for a country'
          className='w-full rounded-md overflow-hidden text-sm pl-16 py-3 bg-dark-mode-element placeholder:text-dark-mode-text text-dark-mode-text'
        />
      </div>
      <button
        aria-label='Press to search country'
        className='absolute left-7 top-3 text-dark-mode-text'
      >
        <IconMagnify />
      </button>
    </form>
  )
}
