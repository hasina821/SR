import {styled} from "@mui/styles"
import { Color } from "../palette/color";

const StyledButton = styled('button')({
     backgroundColor:Color.primary,
     width:'100%',
     cursor:'pointer',
     color:"#172b4d",
     borderRadius:'5px 5px',
     border:'none',
     alignItems:'center',
     fontSize:'12px',
     padding:'8px 8px',
          '&:hover':{
               backgroundColor:"#182C61",
               boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
               color:'white',
          },
          '&:active':{
               boxShadow: 'none', 
          }
})

export default StyledButton;
