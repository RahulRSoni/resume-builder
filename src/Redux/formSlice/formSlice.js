import { createSlice } from "@reduxjs/toolkit";

const initialState = {}


const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        addJobTitle: (state, action) => {
            state.updateFrom = action.payload;
        }
    }
})

export const { addJobTitle} = formSlice.actions;

export default formSlice.reducer;