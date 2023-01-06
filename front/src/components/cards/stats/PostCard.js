import React,{Fragment,useState} from "react"
import {Avatar, Card,Typography} from "@mui/material"
import { CardContent } from "@mui/material"
import {makeStyles} from "@mui/styles"
import { Draggable } from "react-beautiful-dnd"
import {Stack,Modal,Box,Grid} from "@mui/material"
import PostAdminCard from "../../Modal/PostAdminCard"
import {styled} from "@mui/styles";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MessageIcon from '@mui/icons-material/Message';

const MystyledBox  = styled(Box)({
     width:'50%',
     overflowY:'scroll',
     background:'#fff',
     borderRadius:5,
     border:'none',
     padding:'2%',
     height:"600px"
 
 })

const useStyle=makeStyles({
     card:{
          marginBottom:8,
          background:'white',
          borderRadius:3,
          cursor:'pointer'

     }
})

const PostCard = ({card,id,index}) =>{
     const [isOpen,setOpen]=useState(false)
     const style=useStyle()
     
     const handleOpen = ()=>{
          setOpen(true)
     }
     const handleClose = ()=>{
          setOpen(false)
     }
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
                                   <Stack direction="row" spacing={2} style={{alignItems:"center"}}> 
                                        <Avatar  src="https://avatars.githubusercontent.com/u/80751503?s=96&v=4"></Avatar>
                                        <Typography onClick={handleOpen} style={{color:"#000",fontWeight:'bold'}}>{card.description}</Typography>
                                  </Stack>
                                  
                              </CardContent>
                              <Grid container style={{color:"#000",marginBottom:'2px'}}>
                                        <Grid item xs={2} lg={2}>
                                            
                                        </Grid>
                                        <Grid item xs={4} lg={4}>
                                             <Stack direction="row" style={{alignItems:"center"}}>
                                                  <AccessTimeIcon/>
                                                  <h4>10j</h4>
                                             </Stack>
                                        </Grid>
                                        <Grid item xs={4} lg={4}>
                                             <Stack direction="row" style={{alignItems:"center"}}>
                                                  <MessageIcon/>
                                                  <h4>3</h4>
                                             </Stack>
                                        </Grid>
                                        <Grid item xs={2} lg={2}>
                                            
                                        </Grid>
                                  </Grid>
                         </Card>
                         <Modal
                              open={isOpen}
                              onClose={handleClose}
                              sx={{
                                   display:'flex',
                                   alignItems:'center',
                                   justifyContent:'center',
                                   overflowY:'scroll',
                                   paddingTop:'0px'
                              }}
                              >
                              <MystyledBox>
                                   <PostAdminCard handleClose={handleClose}/>
                              </MystyledBox>
                         </Modal>
                    </div>
                    )}
               </Draggable>
          </Fragment>
     )
}

export default PostCard;