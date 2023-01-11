import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const backUrl = "http://127.0.0.1:8000/api";

export const FetchOffre = createAsyncThunk('fetch/offre',async () =>{
    return await fetch(`${backUrl}/offers`).then(
        (res) => res.json()
    )
})

export const FetchCandidature = createAsyncThunk('fetch/candidature',async () =>{
    return await fetch(`${backUrl}/candidatures`).then(
        (res) => res.json()
    )
})

export const DeleteOffre = createAsyncThunk('delete/candidature',async(id) =>{
    return axios.delete(`${backUrl}/delete/offre/${id}`)
    .then(res=>res.data)
    .catch((err)=>{
        console.log(err);
    })
})
 export const FetchOfferCandidate = createAsyncThunk('fetch/offercandiate',async(refe)=>{
    return await fetch(`${backUrl}/offercandidature/${refe}`).then(
        (res) => res.json()
    )
 })

const initialState = {
    status:null,
    offres:[],
    candidatures:[],
    offercandidature:[],
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
        },
        [FetchCandidature.pending]:(state,{payload})=>{
            state.status="loading"
        },
        [FetchCandidature.fulfilled]:(state,{payload})=>{
            state.status="Success";
            state.candidatures = payload;
        },
        [FetchCandidature.rejected]:(state,{payload})=>{
            state.status = "Rejected"
        },
        [DeleteOffre.pending]:(state,{payload})=>{
            state.status ="pending"
        },
        [DeleteOffre.fulfilled]:(state,{payload})=>{
            state.status="Sucess"
        },
        [DeleteOffre.rejected]:(state,{payload})=>{
            state.satus="Rejected"
        },
        [FetchOfferCandidate.pending]:(state,{payload})=>{
            state.status="loading"
        },
        [FetchOfferCandidate.fulfilled]:(state,{payload})=>{
            state.status="Sucess"
            state.offercandidature=payload
        },
        [FetchOfferCandidate.rejected]:(state,{payload})=>{
            state.status="rejected"
        }
    }
})


