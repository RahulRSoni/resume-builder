import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Caro1 from "./Caro1"
import Caro2 from "./Coro2"
import Caro3 from "./Caro3"

const CaroMain = () => {
  return (
    <div>
          <Carousel interval="10000" swipe >
              <Caro1 />
              <Caro2 />
              <Caro3 />
          </Carousel>
    </div>
  )
}

export default CaroMain
