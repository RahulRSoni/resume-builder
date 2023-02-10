import React from "react"
import { Tab, Box, Grid, Paper, Button } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import PersonalInfo from "./PersonalInfo"
import WorkExp from "./WorkEx"
import EduInfo from "./EduInfo"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SkillNLanguages from "./SkillNLanguages"
import OtherInfo from "./OtherInfo"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { FormProvider, useForm } from 'react-hook-form'

const FormMain = () => {

    const formMethod = useForm({
        defaultValues: {
            jobTitle: "",
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            dateOfBirth: null,
            address: "",
            city: "",
            state: "",
            pinCode: "",
            country: "",
            gender: "",
            maritalStatus: "",
            objective: "",
            companyDetails: [{
                workedProfile: "",
                companyName: "",
                companyCity: "",
                companyState: "",
                jobSummary: "",
                jobStarted: null,
                jobEnd: null
            }],

            qualificationDetails: [{
                qualification: "",
                university: "",
                universityCity: "",
                universityState: "",
                certificateDate: null,
                grade: ""
            }],

            courseDetails: [{
                courseName: "",
                courseBy: "",
                certificateDate2: null,
                grade2: "",
            }],


            keySkill: [{
                skill: "",
                level: ""
            }],

            language: [{
                languageName: "",
                level: ""
            }],
            link1: "",
            link2: "",
            link3: "",
            link4: '',
            link5: '',
            link6: '',
            hobbies: '',

            references: [{
                refName: "",
                RefDetail: '',
                RefEmail: '',
                RefMobile: '',
            }],

        }
    });

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 980,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    const [value, setValue] = useState("0");
    const [buttonText, setButtonText] = useState("Next")

    const changeButtonText = (value) => {
        if (value === "4") {
            setButtonText("Save")
        } else if (value <= "5") {
            setButtonText("Next")
        }
    }

    const handleNext = (data) => {
        let genValue = Number(value)
        if (genValue <= 4 && genValue >= 1) {
            let str = String(genValue + 1)
            setValue(str)
            changeButtonText(value)
            console.log(data)
        }
    }

    const handleBack = () => {
        let genValue = Number(value)
        let str = String(genValue - 1)
        setValue(str)
        changeButtonText(value)
    }

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }



    return (
        <ThemeProvider theme={theme}>
            <Grid container display="flex" direction="row" justifyContent="center" alignItems="flex-start" sx={{ m: 1 }} >
                <TabContext value={value} >
                    <Grid item md={2}>
                        <Box sx={{ borderRight: 2, borderColor: "divider", width: "200px" }}>
                            <TabList aria-label="Tab Navigation" orientation={ `theme.breakpoints.keys[2] === "md" ? "vertical" : ""`} onChange={handleChange} TabIndicatorProps={{
                                sx: { bgcolor: "red", height: "5px", left: "0px", width: "4px", textTransform: "capitalize" }
                            }}>
                                <Tab label="Personal Information" value="0" sx={{ textTransform: "capitalize" }} />
                                <Tab label="Work Experience" value="1" sx={{ textTransform: "capitalize" }} />
                                <Tab label="Education" value="2" sx={{ textTransform: "capitalize" }} />
                                <Tab label="Skills & Languages" value="3" sx={{ textTransform: "capitalize" }} />
                                <Tab label="Other Information" value="4" sx={{ textTransform: "capitalize" }} />
                            </TabList>
                        </Box>
                    </Grid>
                    <Grid container item md={10} display="flex" justifyContent="center" >
                        <Paper elevation={8} >
                            <Grid item>
                                <Box sx={{ width: 700, maxHeight: "100%", maxWidth: "100%", }}>
                                    <FormProvider {...formMethod}>
                                        <form id="nextButton" onSubmit={formMethod.handleSubmit(handleNext)}>
                                            <TabPanel value="0"><PersonalInfo /></TabPanel>
                                            <TabPanel value="1"><WorkExp /></TabPanel>
                                            <TabPanel value="2"><EduInfo /></TabPanel>
                                            <TabPanel value="3"><SkillNLanguages /></TabPanel>
                                            <TabPanel value="4"><OtherInfo /></TabPanel>
                                        </form>
                                    </FormProvider>
                                </Box>
                            </Grid>

                            <Grid container item direction="row" justifyContent="space-between" alignItems="center" mx={1} p={2}>
                                <Button color="inherit" startIcon={<ArrowBackIosIcon />} disabled={value === "0"} onClick={() => handleBack()}>
                                    Back
                                    {console.log(theme.breakpoints)}
                                </Button>
                                <Button type="submit" form="nextButton" endIcon={<ArrowForwardIosIcon />} disabled={value > 5 ? true : false} >
                                    {buttonText}
                                </Button>
                            </Grid>

                        </Paper>

                    </Grid>

                </TabContext>
            </Grid>
        </ThemeProvider>
    )
}

export default FormMain