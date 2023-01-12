import React,{Fragment,useState} from "react"
import {Avatar, Card,Typography} from "@mui/material"
import { CardContent,Button } from "@mui/material"
import {makeStyles} from "@mui/styles"
import { Draggable } from "react-beautiful-dnd"
import {Stack,Modal,Box,Grid} from "@mui/material"
import PostAdminCard from "../../Modal/PostAdminCard"
import {styled} from "@mui/styles";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MessageIcon from '@mui/icons-material/Message';
import { Color } from "../../palette/color"
import ApartmentIcon from '@mui/icons-material/Apartment';


function getthetwo(nom){
     const firstTwoChars = nom.slice(0, 2);
     return firstTwoChars;
}
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
                                   <Avatar sx={{ bgcolor: Color.primary,color:"#fff"}}>{getthetwo(card.nom)}</Avatar>
                                        <Typography onClick={handleOpen} style={{color:"#000",fontWeight:'bold'}}>{card.nom}</Typography>
                                  </Stack>
                              </CardContent>
                              <Grid container style={{color:"#000",marginBottom:'2px'}}>
                                        <Grid item xs={8} lg={8}>
                                             <Button style={{background:"#27ae60",color:"#fff"}} >
                                                  <Stack direction="row" style={{alignItems:"center"}}>
                                                       <AccessTimeIcon/>
                                                       <h4>{card.created_at}</h4>
                                                  </Stack>
                                             </Button>
                                        </Grid>
                                        <Grid item xs={2} lg={2}>
                                             <Button style={{background:"#3498db"}} >
                                                  <Stack direction="row" style={{alignItems:"center"}}>
                                                       <ApartmentIcon/>
                                                       <h4>{card.es}</h4>
                                                  </Stack>
                                             </Button>
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