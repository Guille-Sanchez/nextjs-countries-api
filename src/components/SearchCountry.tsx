import { IconMagnify } from './Icons'

export const SearchCountry = (): JSX.Element => {
  return (
    <form className='relative mt-7 bg-dark-mode-bg'>
      <div className='mx-5  bg-dark-mode-bg'>
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
