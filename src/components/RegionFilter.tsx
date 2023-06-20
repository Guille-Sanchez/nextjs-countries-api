'use client'

import { useState } from 'react'
import { IconDown } from './Icons'

export const RegionFilter = (): JSX.Element => {
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
    <div className='w-1/2 max-w-[200px] mx-5 mt-7' aria-haspopup={true}>
      <div className='relative'>
        <button
          className='w-full text-sm text-left pl-5 rounded-md py-3 bg-dark-mode-element text-dark-mode-text'
          onClick={toggleShowRegions}
        >
          {regionToFilterBy}
        </button>
        <div className='absolute top-4 right-5'>
          <IconDown />
        </div>
      </div>
      <ul
        className={`flex w-1/2 max-w-[200px] bg-dark-mode-element rounded-md flex-col gap-2 mt-3 py-2 z-10 ${
          showRegions ? 'absolute' : 'hidden'
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
