import { useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/cards/stats/Header";
import { useTheme,Grid } from "@mui/material";
import { Color } from "../../components/palette/color";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DoneIcon from '@mui/icons-material/Done';
import { FetchCandidature } from "../../toolkit/offres";
import { useSelector,useDispatch } from "react-redux";


const Dossiers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const candidatures = useSelector((state)=>state.offres.candidature.candidatures)
  useEffect(()=>{
    dispatch(FetchCandidature())
  },[dispatch])
  console.log(candidatures);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "created_at", headerName: "Date d'envoi" },
    {
      field: "nom",
      headerName: "Nom",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "prenom",
      headerName: "Prenom",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "es",
      headerName: "Ecole",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "refoffre",
      headerName: "Réference de l'offre",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Grid container>
              <Grid item xs={6} lg={6}>
                <DoneIcon style={{color:'white',cursor:'pointer'}}/>
              </Grid>
            </Grid>
          </>
        )
      }
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Dossiers"
        subtitle="Liste de candidatures"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={candidatures}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Dossiers;
