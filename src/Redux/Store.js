import { configureStore } from "@reduxjs/toolkit"
import formReduser from "./formSlice/formSlice";

export const store = configureStore({
    reducer: formReduser,
})