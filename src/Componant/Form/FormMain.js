import { Tab, Box, Grid, Paper, Button } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { useState } from "react"
import PersonalInfo from "./PersonalInfo"
import WorkExp from "./WorkEx"
import EduInfo from "./EduInfo"
import Skill from "./Skill"
import OtherInfo from "./OtherInfo"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
    jobTitle: Yup.string(),
    firstName: Yup.string()
        .required('Please fill the First Name'),
    lastName: Yup.string()
        .required('Please fill the Last Name'),
    email: Yup.string()
        .required('Email ID is required')
        .email('Please fill valid Email ID'),
    mobile: Yup.number().positive().integer().required('Please fill valid Mobile Number'),
    pinCode: Yup.number().positive().integer(),
    address: Yup.string(),
    city: Yup.string().required('Please enter your City Name'),
    state: Yup.string().required('Please enter your State Name'),
    country: Yup.string().required('Please enter your country Name'),
    objective: Yup.string(),
    jobName: Yup.string(),
    companyName: Yup.string(),
    companyCity: Yup.string(),
    companyState: Yup.string(),
    jobSummary: Yup.string(),
    qualification: Yup.string(),
    university: Yup.string(),
    universityCity: Yup.string(),
    universityState: Yup.string(),
    courseName: Yup.string(),
    courseBy: Yup.string(),
    keySkill: Yup.string(),
    otherSkill: Yup.string(),
    language: Yup.string(),
    link1: Yup.string(),
    link2: Yup.string(),
    link3: Yup.string(),
    link4: Yup.string(),
    link5: Yup.string(),
    link6: Yup.string(),
    otherPlatform: Yup.string(),
    otherPlatformLink: Yup.string(),
    hobbies: Yup.string(),
    RefName: Yup.string(),
    RefDetail: Yup.string(),
    RefEmail: Yup.string().email('Please fill valid Email ID'),
    RefMobile: Yup.string(),
})

const FormMain = () => {

    const formMethod = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            jobTitle: "",
            firstName: "",
            lastName: "",
            email:"",
            mobile:"",
            pinCode:"",
            address:"",
            city:"",
            state:"",
            country:"",
            objective: "",
            jobName:'',
            companyName:'',
            companyCity:'',
            companyState:'',
            jobSummary:'',
            qualification:'',
            university:'',
            universityCity:'',
            universityState:'',
            courseName:'',
            courseBy:'',
            keySkill:'',
            otherSkill: '',
            language: '',
            link1: '',
            link2: '',
            link3: '',
            link4: '',
            link5: '',
            link6: '',
            otherPlatform: '',
            otherPlatformLink: '',
            hobbies: '',
            RefName: '',
            RefDetail: '',
            RefEmail: '',
            RefMobile: '',
        }
    });


    const [value, setValue] = useState("1");
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
        <Grid container display="flex" direction="row" justifyContent="center" alignItems="flex-start" sx={{ m: 1, p: 1 }} >
            <TabContext value={value} >
                <Grid item lg={2}>
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
                    </Box>
                </Grid>
                <Grid container item lg={10} display="flex" justifyContent="center" >
                    <Paper elevation={10} >
                        <Grid item>
                            <Box sx={{ width: 700, maxHeight: "100%", maxWidth: "100%", }}>
                                <FormProvider {...formMethod}><form id="nextButton" onSubmit={formMethod.handleSubmit(handleNext)}>
                                    <TabPanel value="1"><PersonalInfo /></TabPanel>
                                    <TabPanel value="2"><WorkExp /></TabPanel>
                                    <TabPanel value="3"><EduInfo /></TabPanel>
                                    <TabPanel value="4"><Skill /></TabPanel>
                                    <TabPanel value="5"><OtherInfo /></TabPanel>
                                </form></FormProvider>
                            </Box>
                        </Grid>

                        <Grid container item direction="row" justifyContent="space-between" alignItems="center" mx={1} p={2}>
                            <Button variant="text" startIcon={<ArrowBackIosIcon />} disabled={value <= 1 ? true : false} onClick={() => handleBack()}>
                                Back
                            </Button>
                            <Button variant="text" type="submit" form="nextButton" endIcon={<ArrowForwardIosIcon />} disabled={value > 5 ? true : false} >
                                {buttonText}
                            </Button>
                        </Grid>

                    </Paper>

                </Grid>

            </TabContext>
        </Grid>
    )
}

export default FormMain