import toast from "daisyui/components/toast"

import axiosInstance from '../../Helpers/axiosInstance'

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

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

    }
})

export default courseSlice.reducer;