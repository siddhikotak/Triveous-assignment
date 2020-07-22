import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import muiTheme from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div>
      <Router>
        <MuiThemeProvider theme={muiTheme}>
          <Routes />
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
