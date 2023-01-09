import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authUrl = "http://127.0.0.1:8000/api"

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        } 
        const  {data}  = await axios.post(
          `${authUrl}/login`,
          { email, password },
          config
        )
        //console.log(data);
        //console.log(data.token);
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('userToken', JSON.stringify(data.token))
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ username, email, password }, { rejectWithValue }) => {
      try {
        await axios.post(
          `${authUrl}/register`,
          { username, email, password }
        ).then(res=>{
            if(res.user){
                console.log(res.user);
            }
        })
        
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
  
  const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null 

  const initialState = {
  loading: false,
  userInfo: {},
  userToken,
  error: null,
  success: false,
}

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
      [userLogin.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [userLogin.fulfilled]: (state,  payload ) => {
        state.loading = false
        state.userInfo = payload.user
        state.userToken = payload.token
      },
      [userLogin.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
    },
  })


export default authSlice.reducer
