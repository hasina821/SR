import React,{Fragment,useState} from "react"
import {makeStyles} from "@mui/styles"
import PostCard from "./PostCard"
import styled from "@emotion/styled"
import { Button,Typography,Grid} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { Droppable } from "react-beautiful-dnd"
import {addCard} from "../../../toolkit/post"
import { useDispatch } from "react-redux";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SaveIcon from '@mui/icons-material/Save';
import { Color } from "../../palette/color"


const AddCardButton = styled(Button)({
     background: '#ebecf0',
     width:'80%',
     marginBottom:12,
     border: 0,
     borderRadius: 3,
     color: '#636e72',
     height: 24,
     justifyContent:'left',
     textTransform:'lowercase'
   });

const PushcardButton = styled(Button)({
     '&:hover':{
          background:'#1B1464',
     },
     background: '#0652DD',
     width:'100%',
     marginBottom:12,
     border: 0,
     borderRadius: 3,
     color: 'white',
     height: 30,
     textTransform:'lowercase'
   });

   const ColumnTitle = styled(Typography)({
     color: Color.primary,
     fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif',    
     fontSize: '14px',
     fontWeight: '700',
     lineHeight: '20px',
     marginBottom:'4%'
   })

const useStyle=makeStyles({
     container:{
          background:'#ebecf0',
          width:"300",
          borderRadius:3,
          padding:8,
          margin:'4%'
     },
     input:{
          borderRadius:3,
          border:'none',
          width:'100%',
          height:60,
          marginBottom:12,
          resize:'none',
          overflow:'hidden',
          
     }
})

const ClearcardIcon = styled(ClearIcon)({
     color:'#7f8fa6',
     marginLeft:2,
     cursor:'pointer'

})

const More = styled(MoreHorizIcon)({
     '&:hover':{
          background:'#dcdde1'
     },
     cursor:'pointer'
})


const PostList = ({listId,title,allowcreatecard,cards}) =>{
     const dispatch = useDispatch()
     const style = useStyle()
     const [showform,setShowform]= useState(false)
     const [desc,setDesc] = useState("")

     const Handleshowform = () =>{
          setShowform(!showform)
     }

     const Hadlecloseform = () =>{
          setShowform(false)
     }

     const Addcard = (description) =>{
          dispatch(addCard({id:4,description:description}))
          setShowform(false)
          
     } 
     return(
          <Fragment>
               <Droppable droppableId={String(listId)}>
                  {(provided)=>(
                         <div  
                         {...provided.droppableProps} 
                         className={style.container}
                         ref={provided.innerRef}
                         >
                              <Grid container>
                                   <Grid item xs={11} lg={11}>
                                        <ColumnTitle>{title}</ColumnTitle>
                                   </Grid>
                                   <Grid item xs={1} lg={1}>
                                        <MoreHorizIcon sx={{cursor:'pointer'}}/>
                                   </Grid>
                              </Grid>
                              {cards.map((card,index)=>(
                                   <PostCard key={card.id} card={card} index={index} id={card.id}/>
                              ))}
                              {allowcreatecard&&(
                                   <div key={title}>
                                        {showform &&(
                                        <>
                                        <textarea 
                                        autoFocus 
                                        className={style.input} 
                                        type="text" 
                                        placeholder="Saisissez ici le titre de votre carte"
                                        value={desc}
                                        onChange={(e)=>setDesc(e.target.value)}
                                        />
                                        <Grid container>
                                             <Grid item xs={6}>
                                                  <PushcardButton onClick = {(e)=>Addcard(desc)}>
                                                       ajouter une carte
                                                  </PushcardButton>
                                             </Grid>
                                             <Grid item xs={1} onClick = { Hadlecloseform}>
                                                  <ClearcardIcon />
                                             </Grid>  
                                             <Grid item xs={4}>
                                             </Grid> 
                                             <Grid item xs={1} bgColor="red">
                                                  
                                             </Grid>
                                        </Grid>
                                        </>
                                        )}
                                   </div>
                              )}
                              {provided.placeholder}
                         </div>
                    )}
               </Droppable>
          </Fragment>
     )
}

export default PostList;