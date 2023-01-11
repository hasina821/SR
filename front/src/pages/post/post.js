import React,{Fragment, useEffect,useState} from "react"
import PostList from "../../components/cards/stats/PostList"
import {Grid,Button} from "@mui/material"
import { DragDropContext } from "react-beautiful-dnd"
import {useSelector,useDispatch} from "react-redux"
import { moveCard } from "../../toolkit/post"


export default function Post(){
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
                    Data analist
               </h1>
               <Grid container>
                    <Grid item xs={1} lg={1} md={1}>
                         
                    </Grid>
                    <Grid item xs={3/2} lg={3/2} md={3/2}>
                         <Button variant="contained">Contained</Button>
                    </Grid>
                    <Grid item xs={3/2} lg={3/2} md={3/2}>
                         <Button variant="contained">Contained</Button>
                    </Grid>
                    <Grid item xs={8} lg={8} md={8}>

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