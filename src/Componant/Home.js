import React from 'react'
import CaroMain from "../Componant/Carousel/CaroMain"
import Temp1 from './Templates/Temp1'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <Link to="/" />
      <CaroMain/>
      <Temp1/>
    </div>
  )
}

export default Home
