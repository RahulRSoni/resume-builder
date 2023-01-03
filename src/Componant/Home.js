import { React, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";
import Templates1 from "./Carousel/Tamplate-1";

const Home = () => {
  const [temp] = useState([<Templates1 />, "rrrrrrrrr"]);

  return (
    <Carousel animation="fade" navButtonsAlwaysInvisible height="250px">
      {temp.map((item, i) => (
        <Box>
          <Paper sx={{ height: 240 }}>
            {item}
            <Button className="CheckButton">Check it out!</Button>
          </Paper>
        </Box>
      ))}
    </Carousel>
  );
};

export default Home;
