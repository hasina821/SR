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


const Dossiers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "Reference", headerName: "Reference" },
    {
      field: "Nom",
      headerName: "Nom",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Poste_demandé",
      headerName: "Poste_demandé",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Date_de_depôt",
      headerName: "Date_de_depôt",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
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
                <DoneIcon style={{color:Color.primary,cursor:'pointer'}}/>
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
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Dossiers;
