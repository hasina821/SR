import React,{Fragment, useEffect,useState} from "react"
import PostList from "../../components/cards/stats/PostList"
import {Grid,Button} from "@mui/material"
import { DragDropContext } from "react-beautiful-dnd"
import {useSelector,useDispatch} from "react-redux"
import { moveCard } from "../../toolkit/post"
import { useParams } from "react-router-dom";
import { FetchCandidaturebyref } from "../../toolkit/offres";
import { setIdCandidature } from "../../toolkit/offres"
import { setCandidatures } from "../../toolkit/offres"
import axios from "axios"
import produce from "immer"



const backURL="http://localhost:8000/api";

export default function Post(){
     let {refe,nom}=useParams();
     const dispatch=useDispatch();
     const post=useSelector(state=>state.post);
     const candits = useSelector(state=>state.offres.candidatures);
     const nbrecand = useSelector(state=>state.offres.nombrecandidat)
     const onDragEnd = async (result) =>{
          const { destination, source, draggableId} = result;
          if (!destination) {
               return;
          }
          let id_colonne_source = source.droppableId, id_colonne_dest = parseInt(destination.droppableId) , id_candidature = parseInt(draggableId);
          let candidature = candits[id_colonne_source].cards.find(element => element.id === id_candidature);
          try {
               axios.put(`${backURL}/candidature/update/id_colonne/${id_candidature}/`, {
                    "new_id_colonne": id_colonne_dest+1,
               })
               let new_source_cards = candits[id_colonne_source].cards.filter(element => element.id !== id_candidature);
               let newLabels = produce(candits, (draft) => {
                   draft[id_colonne_source].cards = new_source_cards;
                   draft[id_colonne_dest].cards.push(candidature)
               })
               dispatch(setCandidatures(newLabels));
          } catch (error) {
               console.log(error)
          }
     }
     useEffect(()=>{
          dispatch(FetchCandidaturebyref(refe));
     },[dispatch])
     console.log(post);
     console.log(candits);
     return(
          <Fragment>
               <h1 className="ml-4 text-2xl font-semibold text-white p-4 rounded-2xl">
                    {nom}
               </h1>
               <Grid container>
                    <Grid style={{marginLeft:"1%"}} item xs={3/2} lg={3/2} md={3/2}>
                         <Button variant="contained">Postulants <span className="text-yellow-500 ml-2"> ({nbrecand}) </span></Button>
                    </Grid>
                    <Grid item xs={10} lg={10} md={10}>

                    </Grid>
               </Grid>
               <DragDropContext onDragEnd={onDragEnd}>
                    <div>
                         <h1>{post.title}</h1>
                         <Grid container>
                              {candits.map(list=>(
                              <Grid item key={list.id} lg={3}>
                                   <PostList listId={list.id} cards={list.cards} title={list.title} allowcreatecard={list.allowcreatecard}/>
                              </Grid>
                              ))}
                              <Grid item  lg={2}>
                              </Grid>
                         </Grid>
                    </div>
               </DragDropContext>
          </Fragment>
     )
  }