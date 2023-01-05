import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Aboutimg from "./Assets/Aboutimg.jpg";


const Aboutus = () => {
  return (
    <>
      <Box sx={{ display: "flex", ml: 6 }}>
        <Grid container rows={{ xs: 12, sm: 12, md: 6 }} rowSpacing={2}>
          <Grid item sm={12} md={6} sx={{ p: 2, mt: 1 }}>
            <Typography align="left" variant="h2" sx={{ fontWeight: 'medium' }}>
              Resume <br></br>
              Builder
            </Typography>
            <Typography variant="body1" align="justify">
              The job market is more competitive today than it’s ever been before. Whenever you apply for an open position, it’s safe to assume that dozens if not hundreds of other people are applying for the exact same position as well.
              You’ll need an excellent resume in order to stand out from the competition. But writing effective resumes can be hard — you must elaborate enough on your background and skill set to impress prospective employers, yet you also need to be concise enough to make sure a hiring manager adds you to the “yes” pile quickly.
              You should also be concerned about your resume’s design. Many employers now use applicant tracking system (ATS) software to automate the initial stage of the hiring process. If the formatting of your resume isn’t optimized for such software, it might get filtered out before it even reaches the person who decides whether or not you get an interview.
              Thankfully, there are services available that can take care of these difficult aspects of resume writing for you. In addition to writing and designing your resume, these providers often offer cover letter writing, LinkedIn profile optimization, interview coaching, and other valuable career services.
            </Typography>
            <Typography align="left" variant="h2" sx={{ fontWeight: 'medium' }}>
              Share with your friends
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} mt={20} sx={{ p: 20 }}>
            <img src={Aboutimg} className="App-logo" alt="logo" height="300vh" />
          </Grid>
        </Grid>
      </Box>


    </>
  )
}

export default Aboutus
