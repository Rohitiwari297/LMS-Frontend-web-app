import toast from "react-hot-toast"

import axiosInstance from '../../Helpers/axiosInstance'

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// INITIAL STATE
const initialState = {
    courseData: []
}

// CREATE ASYNC THUNK FOR COURSES
export const getAllCourses = createAsyncThunk(
    'course/get',
    async () => {
        try {
            const response = axiosInstance.get('/courses');
            toast.promise(response, {
                loading: "loading course data...",
                success: "Course loaded successfully",
                error: "Failed to get the courses",
            })
            return(await response).data.courses;
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
)

// SLICE FOR COURSE
const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCourses.fulfilled, (state, action) => {
                console.log("payload courses Data:",action.payload)
                if(action.payload){
                    state.courseData = [...action.payload];
                }
            })
    }
})

export default courseSlice.reducer;