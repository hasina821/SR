import React,{Fragment, useEffect,useState} from "react"
import PostList from "../../components/cards/stats/PostList"
import {Grid,Button} from "@mui/material"
import { DragDropContext } from "react-beautiful-dnd"
import {useSelector,useDispatch} from "react-redux"
import { moveCard } from "../../toolkit/post"
import { useParams } from "react-router-dom"


export default function Post(){
     let {refe,nom}=useParams();
     const dispatch=useDispatch()
     const post=useSelector(state=>state.post);
     const onDragEnd = (result) =>{
          const { destination, source, draggableId} = result;
           
          if (!destination) {
                 return;
               }
          dispatch(moveCard ({
               droppableIdStart:source.droppableId,
               droppableIdEnd:destination.droppableId,
               droppableIndexEnd:source.index,
               droppableIndexStart:destination.index,
               draggableId,
          }));
          
     }
     return(
          <Fragment>
               <h1 className="ml-4 text-2xl font-semibold text-white p-4 rounded-2xl">
                    {nom}
               </h1>
               <Grid container>
                    <Grid style={{marginLeft:"1%"}} item xs={3/2} lg={3/2} md={3/2}>
                         <Button variant="contained">Postulants <span className="text-yellow-500 ml-2"> (10) </span></Button>
                    </Grid>
                    <Grid item xs={10} lg={10} md={10}>

                    </Grid>
               </Grid>
               <DragDropContext onDragEnd={onDragEnd}>
                    <div>
                         <h1>{post.title}</h1>
                         <Grid container>
                              {post.map(list=>(
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