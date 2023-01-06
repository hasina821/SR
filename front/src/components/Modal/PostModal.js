import React from "react"
import {Modal,Box } from "@mui/material"
import {styled} from "@mui/styles"
import { Height } from "@mui/icons-material"


const MystyledBox  = styled(Box)({
    width:'40%',
    overflowY:'scroll',
    background:'#fff',
    borderRadius:5,
    border:'none',
    padding:'2%',
  })
  

export default function PostModal ({open, setOpen}) {
  const handleClose = () =>{
    setOpen(false)
  }
  
  return(
    <Modal
      open={open}
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
        I'm here bad boy
         { /*<CardMenu save={colonne === 3 ? 'Terminé' : 'Validé'} handleClose={handleClose} saveChange={saveChange}/>*/}
      </MystyledBox>
    </Modal>
  )
}
