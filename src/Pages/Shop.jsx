import React from 'react'
import Upstock from '../Components/Upstock/Upstock'
import Adopt from '../Components/Adopt/Adopt'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'


const Shop = () => {
  return (
    <div>
        
        <Upstock/>
        <Adopt/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default Shop