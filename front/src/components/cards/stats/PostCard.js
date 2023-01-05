import React,{Fragment} from "react"
import {Card,Typography} from "@mui/material"
import { CardContent } from "@mui/material"
import {makeStyles} from "@mui/styles"
import { Draggable } from "react-beautiful-dnd"

const useStyle=makeStyles({
     card:{
          marginBottom:8,
          background:'white',
          borderRadius:3,
          cursor:'pointer'

     }
})

const PostCard = ({card,id,index}) =>{
     const style=useStyle()
     return(
          <Fragment>
               <Draggable draggableId={String(id)} index={index}>
                    {provided => (
                    <div 
                    ref={provided.innerRef} 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    >
                         <Card className={style.card}>
                              <CardContent>
                                   <Typography style={{color:"#000"}}>{card.description}</Typography>
                              </CardContent>
                         </Card>
                    </div>
                    )}
               </Draggable>
          </Fragment>
     )
}

export default PostCard;