'use client'

import { useState } from 'react'
import { IconDown } from './Icons'

export const CountriesDropdown = (): JSX.Element => {
  const [showRegions, setShowRegions] = useState(false)
  const [regionToFilterBy, setRegionToFilterBy] = useState('Filter by region')
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  const toggleShowRegions = () => {
    setShowRegions(prev => !prev)
  }

  const filterByRegion = (region: string) => {
    setRegionToFilterBy(region)
    toggleShowRegions()
  }

  return (
    <div
      className='relative w-1/2 max-w-[200px] mx-5 mt-7'
      aria-haspopup={true}
    >
      <button
        className='w-full text-sm text-left pl-5 rounded-md py-3 bg-dark-mode-element text-dark-mode-text'
        onClick={toggleShowRegions}
      >
        {regionToFilterBy}
      </button>
      <div className='absolute top-4 right-5'>
        <IconDown />
      </div>

      <ul
        className={`flex bg-dark-mode-element rounded-md flex-col gap-2 py-2 top-1 z-10 ${
          showRegions ? 'relative' : 'hidden'
        }`}
      >
        {regions.map(region => {
          return (
            <li key={region} className='w-1/2'>
              <button
                onClick={() => filterByRegion(region)}
                className='pl-5 text-sm text-dark-mode-text'
              >
                {region}
              </button>
            </li>
          )
        })}
      </ul>

      {showRegions && (
        <button
          className='absolute inset-0'
          aria-label='Close filter'
          onClick={() => {
            toggleShowRegions()
            setRegionToFilterBy('Filter by region')
          }}
        />
      )}
    </div>
  )
}
