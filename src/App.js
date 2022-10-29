import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Routes from "./pages/routes.js";


function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CssBaseline>
  );
}
export default App;
