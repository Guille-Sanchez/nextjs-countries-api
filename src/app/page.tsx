import { CountriesGrid } from '@/components/CountriesGrid'
import { RegionFilter } from '../components/RegionFilter'
import { SearchCountry } from '../components/SearchCountry'

export default function Home() {
  return (
    <main>
      <div className='flex w-full justify-center'>
        <div className='mt-7 mx-5 flex flex-col sm:flex-row justify-between w-full max-w-[1300px] gap-7'>
          <SearchCountry />
          <RegionFilter />
        </div>
      </div>
      <CountriesGrid />
    </main>
  )
}
