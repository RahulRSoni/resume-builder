import { Tab, Box, Grid, Paper } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import PersonalInfo from "./PersonalInfo"
import WorkExp from "./WorkEx"
import EduInfo from "./EduInfo"
import Skill from "./Skill"
import OtherInfo from "./OtherInfo"

const FormMain = () => {

    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Grid container display="flex" direction="row" justifyContent="center" alignItems="flex-start" sx={{ m: 1, p: 2 }}>
            <TabContext value={value} >
                <Grid item lg={3}>
                    <Box sx={{ borderRight: 2, borderColor: "divider", width: "200px" }}>
                        <TabList aria-label="Tab Navigation" orientation="vertical" onChange={handleChange} TabIndicatorProps={{
                            sx: { bgcolor: "red", height: "5px", left: "0px", width: "4px", textTransform: "capitalize" }
                        }}>
                            <Tab label="Personal Information" value="1" sx={{ textTransform: "capitalize" }} />
                            <Tab label="Work Experience" value="2" sx={{ textTransform: "capitalize" }} />
                            <Tab label="Education" value="3" sx={{ textTransform: "capitalize" }} />
                            <Tab label="Key Skills" value="4" sx={{ textTransform: "capitalize" }} />
                            <Tab label="Other Information" value="5" sx={{ textTransform: "capitalize" }} />
                        </TabList>
                    </Box></Grid>
                <Grid item lg={9} display="flex" justifyContent="center" >
                    <Paper elevation={10} >
                        <Box sx={{ width: 700, maxHeight: "100%", maxWidth: "100%", }}>
                            <TabPanel value="1"><PersonalInfo /></TabPanel>
                            <TabPanel value="2"><WorkExp/></TabPanel>
                            <TabPanel value="3"><EduInfo/></TabPanel>
                            <TabPanel value="4"><Skill/></TabPanel>
                            <TabPanel value="5"><OtherInfo/></TabPanel>
                        </Box>
                    </Paper>
                </Grid>
            </TabContext>
        </Grid>
    )
}

export default FormMain
