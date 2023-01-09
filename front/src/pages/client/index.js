import {useEffect,useState} from "react";
import {Box, Typography,Modal} from '@mui/material';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {styled} from "@mui/styles";
import PlayIcon from "../../components/logo/play";
import SpeakerPhoneIcon from "../../components/logo/speaker";
import ShoppingBagIcon from "../../components/logo/shopping";
import ChipIcon from "../../components/logo/Chip";
import ChartIcon from "../../components/logo/chart";
import { Color } from "../../components/palette/color";
import CardPost from "../../components/cards/stats/cardPost";
import { Link } from "react-router-dom";
import {Link as Lank} from "react-scroll";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import UserDropdown from "../../components/dropdown/userDropDown"
import { useSelector } from "react-redux";
import { FetchOffre } from "../../toolkit/offres";
import { useDispatch } from "react-redux";
import PostCardModal from '../../components/Modal/PostCardModal';

const MystyledBox  = styled(Box)({
    width:'40%',
    overflowY:'scroll',
    background:'#fff',
    borderRadius:5,
    border:'none',
    padding:'2%',
    height:"600px"

})

const useStyles = makeStyles((theme)=>({
  root: {
   height:'90px',
   width:'210px',
   fontFamily:'Arial',
   padding:'5px 5px 5px 5px',
   borderRadius:'5px',
   margin:'10px 0px 10px 0px',
   cursor:'pointer',
   fontSize:'16px',
   transition:'all 0.8s',
   '&:hover':{
        boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    "& a":{
      textDecoration:'none'
    }
  },
  model:{
    width:'100px',
    height:'22px',
    background:'#ED4C67',
    borderRadius:'5px',
    color:"white",
    textAlign:'center',
    fontWeight:'bold',
    '& .p-model':{
        fontSize:'11px',
        color:'#fff'
    }
  },
  model2:{
    width:'100px',
    height:'22px',
    color:"white",
    background:'#006266',
    borderRadius:'5px',
    textAlign:'center',
    fontWeight:'bold',
    '& .p-model':{
        fontSize:'11px',
        color:'#fff'
    }
  },
  title:{
    display:'flex',
    flexWrap:'wrap',
    textDecoration:'none',
    color:'#000',
    overflow:'auto',
    marginTop:'15px',
    '& .p-title':{
          fontWeight:'bold',
          
      }
  }
}));


export const StyledTitle =styled('p')({
    textAlign:'center',
    fontSize:'12px',
    color:'#5e6c84',
    lineHeight:'10px'
  
  })

export default function ClientHome(){
    let Offre = useSelector((state)=>state.offres.offres.offers)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(FetchOffre())
    },[])
    console.log(Offre);
    const menu = [
        {
            id:"offre",
            title:"Nos offres",
            link:"/offres"
        },
        {
            id:"contact",
            title:"Nous contacter",
            link:"/contact"
        }
        ];
    const features = [
    {
        icon: <SpeakerPhoneIcon/>,
        name: "Digital Marketing",
    },
    {
        icon: <ShoppingBagIcon/>,
        name: "E-Commerce",
    },
    {
        icon: <ChipIcon/>,
        name: "Digital Research",
    },
    {
        icon: <ChartIcon/>,
        name: "Digital Analysis",
    },
    {
        icon: <ChartIcon/>,
        name: "Developpeur web",
    },
    {
        icon: <ChartIcon/>,
        name: "Data analiste",
    },
    {
        icon: <ChartIcon/>,
        name: "RH junior",
    },
    {
        icon: <ChartIcon/>,
        name: "Devops",
    },
    {
        icon: <ChartIcon/>,
        name: "Developpeur fullstuck",
    },
    ];

    const classes = useStyles();
    const [isOpen, setIsOpen] =  useState(false)
    
    const handleOpen = () =>{
      setIsOpen(true)
    }
  
    const handleClose = () =>{
      setIsOpen(false)
    }
    const imageLink = "https://mediahttps://www.codeur.com/blog/wp-content/uploads/2018/12/codeur-developpeur-web.jpg.gettyimages.com/id/1176475543/fr/vectoriel/sc%C3%A8ne-de-for%C3%AAt-avec-laurore.jpg?s=612x612&w=gi&k=20&c=kVx724HVFcIP_SuCgZRAOgrxpOUbIouE7YUMJqk50JE=";
  
    {/*const path = "/kanban/" + menu.id*/}
    
    return(
        <>
           <div class="overflow-hidden w-full min-h-screen font-sans" style={{background:Color.primary}}>
                <div class="relative">
                    <img class="absolute opacity-70" src="https://raw.githubusercontent.com/tailwindcollections/tailwind-traffic-website/d208364918d92be9afb20d24e236fdb9bfc4fbf9/public/img/bg-1.svg" alt=""></img>
                    <div class="relative py-10 px-8 mx-auto max-w-7xl">
                        <nav class="flex justify-between items-center">
                        <a href="#" class="text-2xl font-semibold text-white">SMART-RECRUTE</a>
                        <ul
                            class="hidden md:items-center md:tracking-wider md:text-gray-300 md:gap-8 lg:gap-x-16 md:flex"
                        >
                            {menu.map((item=>(
                                <Lank 
                                to={item.id}
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                    <li className="p-4 hover:bg-white hover:rounded-2xl hover:text-gray-900 ease-in duration-300 cursor-pointer" key={item.id}>
                                        {item.title}
                                    </li>
                                </Lank>
                            )))}
                            <Link to="/suivi">
                                    <li className="p-4 hover:bg-white hover:rounded-2xl hover:text-gray-900 ease-in duration-300 cursor-pointer">
                                        Suivre un dossier
                                    </li>
                            </Link>
                        </ul>
                            <UserDropdown/>
                        </nav>
                    </div>
                    <div class="relative py-10 px-8 mx-auto max-w-7xl">
                        <div class="flex flex-col gap-y-12 md:flex-row">
                            <div class="md:w-1/2">
                                <h1
                                class="relative z-10 pt-10 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
                                >
                                Postulez ici  et {" "}
                                <span
                                    class="relative after:bottom-2 after:left-0 after:bg-gradient-to-l after:from-teal-300 after:absolute after:w-80 after:h-5 after:-z-10"
                                >
                                suivez votre {" "}
                                </span>
                                candudature facilement 
                                </h1>
                                <p class="pt-2 max-w-lg text-xl tracking-wide leading-relaxed text-gray-300">
                                Un outil simple et efficace pour mettre en valeur vos competences.
                                </p>
                                <div class="flex gap-x-6 items-center pt-12">
                                <button
                                    class="py-4 px-6 font-medium tracking-wide bg-teal-200 rounded-lg shadow-md transition hover:bg-teal-300"
                                >
                                    COMMENCER
                                </button>
                                <button
                                    class="flex gap-x-2 items-center py-4 px-6 font-medium tracking-wide text-gray-300 transition hover:text-teal-300"
                                >
                                    <PlayIcon class="w-8 h-8 stroke-current" />
                                    <span>Regardez les etapes</span>
                                </button>
                                </div>
                            </div>
                            <div class="flex items-center md:justify-center md:pl-24 md:w-1/2">
                                <img
                                class="max-w-md lg:max-w-xl drop-shadow-2xl"
                                src="https://raw.githubusercontent.com/hasina821/Avaizo/cc3706662306b569724f77c725e630e888289837/Front/public/undraw_interview_re_e5jn(1).svg"
                                alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div> 
                <h1
                    style={{textAlign:"center",marginTop:"5%"}}
                    class=" z-10 pt-10 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
                                >
                                Nos offres
                </h1>
                <div id="offre" class="relative">
                {Offre.map((offre)=>(
                <div class="relative py-16 px-8 mx-auto max-w-7xl">
                    <div
                        class="grid grid-cols-2 gap-4 items-start py-16 w-full md:grid-cols-4 md:gap-x-8"
                        >
                             <Box className={classes.root}  style={{
                                background: `url(http://127.0.0.1:8000/api/), #ddd`,
                                backgroundSize:'cover',
                                display:'flex',
                                flexDirection:'row'
                            }} >
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
                                        <PostCardModal handleClose={handleClose}/>
                                    </MystyledBox>
                                </Modal>
                                <Box flex={3} >
                                <Box className={offre.urgent=="1"?classes.model:classes.model2}>
                                    <h6  className='text-sm'>
                                        {offre.urgent=="1"?"Urgent":"Assez urgent"}
                                    </h6>
                                </Box>
                                <Box className={classes.title}>
                                <Typography onClick={handleOpen} variant='p' className='p-title' style={{color:"#555"}} noWrap>
                                    {offre.nom.length > 15 ?offre.nom.slice(0,15) + "..." : offre.nom}
                                </Typography>
                                </Box>  
                                </Box>
                                <Box sx={{ flex:1}}>
                                <IconButton 
                                    aria-label="Modifier"  
                                    title='Modifier'
                                    id='update-button' 
                                    sx={{ 
                                    backgroundColor: '#FFFFFFB0',
                                    '&:hover':{
                                        backgroundColor: '#172B4D',
                                        color:'#FFFFFFB0'
                                    } 
                                    }}
                                    onClick={() => handleOpen()}
                                >
                                    <EditIcon id='update-icon'   fontSize='1px' />
                                </IconButton>
                                </Box>
                            </Box>
                        </div>
                    </div>
                ))}
                </div>
                
                <div id="contact" className="mt-64">
                    <Footer/>
                </div>
            </div>
        </>
    )
}