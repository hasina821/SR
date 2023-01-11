import React,{useState} from "react"
import { Routes,Route } from "react-router-dom"
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import Dashboard from "../scenes/dashboard";
import Offres from "../scenes/offres";
import Invoices from "../scenes/invoices";
import Dossiers from "../scenes/Dossiers";
import Bar from "../scenes/bar";
import Form from "../scenes/form";
import Line from "../scenes/line";
import Pie from "../scenes/pie";
import FAQ from "../scenes/faq";
import Geography from "../scenes/geography";
import Calendar from "../scenes/calendar/calendar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import Post from "../pages/post/post";
import AddpostAdmin from "../pages/admin/Addpostadmin";

export default function AdminRoutes () {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    return(
        <>
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
          <Sidebar isSidebar={isSidebar} />
            <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                    <Route path="/" element={<Offres />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/post/:refe/:nom" element={<Post />} />
                    <Route path="/dossiers" element={<Dossiers />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/geography" element={<Geography />} />
                    <Route path="/addpost" element={<AddpostAdmin />} />
                </Routes>
            </main> 
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
        </>
    )
}