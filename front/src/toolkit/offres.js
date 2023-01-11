import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const backUrl = "http://127.0.0.1:8000/api";

export const FetchOffre = createAsyncThunk('fetch/offre',async () =>{
    return await fetch(`${backUrl}/offers`).then(
        (res) => res.json()
    )
})


export const FetchCandidature = createAsyncThunk(
    'fetch/candidature',
    async() => {
        const res = await axios.get(`${backUrl}/candidatures`);
        return res.data;
    }
)

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

export const FetchCandidaturebyref = createAsyncThunk('fetch/cand',async(refe)=>{
    return await fetch(`${backUrl}/candidature/byref/${refe}`).then(
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
        [FetchCandidaturebyref.pending]:(state,{payload})=>{
            state.status="loading"
        },
        [FetchCandidaturebyref.fulfilled]:(state,{payload})=>{
            state.status="Sucess"
            
            let initialCandidatures=[
                {id:`${0}`,title:"Nouveau",allowcreatecard:true, save: "Validé", isDropDisabled: false, cards:[
                ]},
                {id:`${1}`,title:"Entretien en ligne",allowcreatecard:false, save: "Validé", isDropDisabled: false, cards:[
                ]},
                {id:`${2}`,title:"Entretien sur place ",allowcreatecard:false, save: "Terminé", isDropDisabled: false, cards:[
                ]},
                {id:`${3}`,title:"Terminé",allowcreatecard:false, save: "Validé", isDropDisabled: false, cards:[
                ]}
            ]
            const data = payload.Candidature;
            for(let i = 0; i<data.length; i++ ){
                if(data[i].id_colonne === 1){
                    initialCandidatures[0].cards.push(data[i]);
                }
                else if(data[i].id_colonne === 2){
                    initialCandidatures[1].cards.push(data[i]);
                }
                else if(data[i].id_colonne === 3){
                    initialCandidatures[2].cards.push(data[i]);
                }
                else if(data[i].id_colonne === 4){
                    initialCandidatures[3].cards.push(data[i]);
                }
                else if(data[i].id_colonne === 5){
                    initialCandidatures[4].cards.push(data[i]);
                }
            }
            
            state.candidatures = initialCandidatures;
        },
        [FetchCandidaturebyref.rejected]:(state,{payload})=>{
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
        },
    }
})


