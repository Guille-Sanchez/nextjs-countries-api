import { IconMoon } from '../components/Icons'

function Header() {
  return (
    <header className='w-full  px-5 py-7 bg-dark-mode-element'>
      <div className='flex justify-between w-full max-w-[1300px] mx-auto'>
        <h1 className='font-bold'>Where in the world?</h1>

        <div className='flex items-center gap-2'>
          <IconMoon />
          <p className='text-sm'>Dark Mode</p>
        </div>
      </div>
    </header>
  )
}

export default Header
