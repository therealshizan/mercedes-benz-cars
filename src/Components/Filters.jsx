import React from 'react'
import FuelTypeFilter from './FuelTypeFilter'
import ModelsFilter from './ModelsFilter'
import BodyTypeFilter from './BodyTypeFilter'

const Filters = () => {
  return (
    <div className='filters'>
      <h2>Filters</h2>
      <ModelsFilter/>
      <FuelTypeFilter/>
      <BodyTypeFilter/>
    </div>
  )
}

export default Filters
