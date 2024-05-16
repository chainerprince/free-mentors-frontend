import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"
import { loginUserAPI, signupUserAPI } from "./authAPI"

export interface UserSignupInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  bio: string;
  occupation: string;
  expertise: string;
}
export interface UserLoginInfo {
  email: string;
  password: string;  
}

export interface AuthSliceState {
  status: "idle" | "loading" | "failed";
  value: any
}

const initialState: AuthSliceState = {
  status: "idle",
  value: {}
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const authSlice = createAppSlice({
  name: "signup",
  
  initialState,
  
  reducers: create => ({
    signupUser: create.asyncThunk(
      async (userInfo: UserSignupInfo) => {
        const response = await signupUserAPI(userInfo);
       
        return response.data;
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.value += action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),

    loginUser: create.asyncThunk(
      async (userInfo: UserLoginInfo) => {
        const response = await loginUserAPI(userInfo);
       
        return response.data;
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.value += action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
  }),  

})


export const {  signupUser,loginUser } =  authSlice.actions
