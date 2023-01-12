import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Caro1 from "../Componant/Carousel/Caro1"
import Caro2 from "../Componant/Carousel/Coro2"
import Caro3 from "../Componant/Carousel/Caro3"
import { Link } from 'react-router-dom'
import { Paper, Button } from '@mui/material'

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  )
}

const Home = () => {

  const anArrayOfNumbers = [<Caro1 />, <Caro2 />, <Caro3 />];

  return (
    <div>
      <Link to ="/">
      <Carousel>
          {
            anArrayOfNumbers.map((item, i) => <Item key={i} item={item} />)
          }
      </Carousel>
          </Link>
      
    </div>
  )
}

export default Home
