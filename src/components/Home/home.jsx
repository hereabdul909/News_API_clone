import React from 'react'
import Hero from './Hero'
import FetchData from '../ApiData/FetchData'

function Home() {
  return (
    <div>
      <Hero/> 
      <FetchData/>
    </div>
  )
}

export default Home