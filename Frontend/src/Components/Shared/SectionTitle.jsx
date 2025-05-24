import React from 'react'

export const SectionTitle = ({title,subtitle}) => {
  return (
      <div className='text-center mb-6'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <h3 className='text-black/80 font-semibold mt-4 md:mt-4 sm:mt-3'>{subtitle}</h3>
    </div>
  )
}
