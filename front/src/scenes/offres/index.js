import {useEffect} from "react";
import { Box, Grid, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/cards/stats/Header";
import { Color } from "../../components/palette/color";
import DoneIcon from '@mui/icons-material/Done';
import { Link } from "react-router-dom";
import {Button} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useSelector,useDispatch} from "react-redux";
import { FetchOffre } from "../../toolkit/offres";
import { useNavigate } from "react-router-dom";

const Offres = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(FetchOffre());
    },[dispatch])
    
    let Offre = useSelector((state)=>state.offres.offres.offers)
    console.log(Offre);
  
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "nom",
      headerName: "Nom",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "ref",
      headerName: "Réference",
      flex: 1,
    },
    {
      field: "disponible",
      headerName: "Disponibilté",
      flex: 1,
    },
    {
      field: "domaine",
      headerName: "Domaine",
      flex: 1,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Grid container>
              <Grid item xs={4} lg={4}>
                <DoneIcon style={{color:'white',cursor:'pointer'}}/>
              </Grid>
            </Grid>
          </>
        )
      }
    },
  ];
  const handleRowClick  = (params) => {
    navigate(`/admin/post/${params.row.ref}/${params.row.nom}`);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="OFFRE" subtitle="Gérer les offres" />
        <Box>
          <Button
            sx={{
              backgroundColor: Color.primary,
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <Link to="/admin/addpost">
           <AddIcon sx={{ mr: "10px" }}/>
            Nouveau offre
           </Link>
          </Button>
        </Box>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: Color.primary,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        
        <DataGrid onRowClick={handleRowClick} checkboxSelection rows={Offre} columns={columns} />
        
      </Box>
    </Box>
  );
};

export default Offres;
