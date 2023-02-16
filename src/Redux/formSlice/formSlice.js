import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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


const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        addJobTitle: (state, action) => {
            state.jobTitle = action.payload;
        }
    }
})

export const {
    addJobTitle,
} = formSlice.actions;

export default formSlice.reducer;