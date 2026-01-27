import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from '../../Helpers/axiosInstance'

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn')|| false,
    role: localStorage.getItem('role')|| "",
    data: localStorage.getItem('data')|| {}

}

// Thunk function for creating account
export const  createAccount = createAsyncThunk(
    "/auth/signup", 
    async (data) => {
        try {
            const res = axiosInstance.post('/user/register', data);
            toast.promise(res, {
                loading: "wait! creating your account",
                success: (data)=>{
                    return data?.data?.message;
                },
                error: "Failed to create account"
            });

            return (await res).data;
            

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
})

// Thunk function for the login Account
export const  loginAccount = createAsyncThunk(
    "/auth/login", 
    async (data) => {
        try {
            const res = axiosInstance.post('/user/login', data);
            // console.log('dataaa:', data)
            toast.promise(res, {
                loading: "wait! authentication in progress...",
                success: (data)=>{
                    return data?.data?.message;
                },
                error: "Failed to log in"
            });

            return (await res).data;
            

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
})

export const logoutAccount = createAsyncThunk(
    "/auth/logout",
    async () => {
        try {
            const res = axiosInstance.post('/user/logout');
            console.log('response:',res.data)
            toast.promise(res, {
                loading: "wait! logout in progress...",
                success: (data)=>{
                    return data?.data?.message;
                },
                error: "Failed to log out"
            });

            return (await res).data;
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
)

//
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAccount.fulfilled, (state, action) => {
                //MANAGE LOCAL STORAGE
                localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action?.payload?.user?.role);
                // UPDATE CURRENT STORAGE
                state.isLoggedIn = true;
                state.role = action?.payload?.user?.role;
                state.data = action?.payload?.user
            })
            .addCase(logoutAccount.fulfilled, (state) => {
                localStorage.clear();
                state.data = {};
                state.isLoggedIn = false;
                state.role = "";
            })
    }
})

// export const {} = authSlice.actions;
export default authSlice.reducer;