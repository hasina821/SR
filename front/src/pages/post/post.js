import React,{Fragment, useEffect,useState} from "react"
import PostList from "../../components/cards/stats/PostList"
import {Grid} from "@mui/material"
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