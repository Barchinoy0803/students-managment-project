import { configureStore } from "@reduxjs/toolkit";
import students from "./features/students.slice";

export const store = configureStore({
    reducer: {
        students
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
