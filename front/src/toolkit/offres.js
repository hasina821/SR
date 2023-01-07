import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
    offres:[]
}


const OffreSlice= createSlice({
    name:'offres',
    extraReducers:{}
})

