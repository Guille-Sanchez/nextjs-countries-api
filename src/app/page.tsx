import { CountriesGrid } from '@/components/CountriesGrid'
import { RegionFilter } from '../components/RegionFilter'
import { SearchCountry } from '../components/SearchCountry'

export default function Home() {
  return (
    <main>
      <SearchCountry />
      <div className='relative'>
        <RegionFilter />
        <CountriesGrid />
      </div>
    </main>
  )
}
