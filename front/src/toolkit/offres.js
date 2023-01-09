import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const backUrl = "http://127.0.0.1:8000/api";

export const FetchOffre = createAsyncThunk('fetch/offre',async()=>{
        const res = await axios.get(`${backUrl}/offers`)
        return res.data;
})

const initialState = {
    status:null,
    offres:[],
}   

export const  OffreSlice=createSlice({
    name:"offres",
    initialState,
    reducers:{},
    extraReducers:{
        [FetchOffre.pending]:(state,{payload})=>{
            state.status="loading";
        },
        [FetchOffre.fulfilled]:(state,{payload})=>{
            state.status="success";
            state.offres = payload;
        },
        [FetchOffre.rejected]:(state,{payload})=>{
            state.status="failed";
        }
    }
})

