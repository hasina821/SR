import { Box, Grid, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/cards/stats/Header";
import { Color } from "../../components/palette/color";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from "react-router-dom";

const Offres = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "nom",
      headerName: "Nom",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Nb_de_postulants",
      headerName: "Nb_de_postulants",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Date_de_creation",
      headerName: "Date_de_creation",
      flex: 1,
    },
    {
      field: "Disponibilté",
      headerName: "Disponibilté",
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
                <Link to="/admin/post">
                  <DoneIcon style={{color:Color.primary,cursor:'pointer'}}/>
                </Link>
              </Grid>
              <Grid item xs={4} lg={4}>
                <ModeEditIcon style={{color:"#ff0",cursor:'pointer'}}/>
              </Grid>
              <Grid item xs={4} lg={4}>
                <DeleteIcon style={{color:"#f00",cursor:'pointer'}}/>
              </Grid>
            </Grid>
          </>
        )
      }
    },
  ];

  return (
    <Box m="20px">
      <Header title="OFFRE" subtitle="Gérer les offres" />
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
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Offres;
