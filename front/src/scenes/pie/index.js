import { Box } from "@mui/material";
import Header from "../../components/cards/stats/Header";
import PieChart from "../../components/cards/stats/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
