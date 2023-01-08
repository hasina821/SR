import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/baseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
          `${backendURL}/api/user/login`,
          { email, password },
          config
        )
        localStorage.setItem('userToken', data.userToken)
        return data
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
    async ({ firstName, email, password }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        await axios.post(
          `${backendURL}/api/user/register`,
          { firstName, email, password },
          config
        )
      } catch (error) {
      // return custom error message from backend if present
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )

const AuthSlice = createSlice({
    name: 'auth-reducer',
    initialState: [],
    extrareducers: {
        login: (state, action) => {
            return action.payload
        }
    }
})

export const register_action = (data) => {
    baseUrl.post("/register", data).then(res => console.log(res)).catch(err => console.log(err))
}
