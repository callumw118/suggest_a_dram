import React from 'react';
import NavBar from './NavBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { deepPurple, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: deepPurple[500]
    }
  },
});

function App() {
  return (
    <main className="main-container">

      <ThemeProvider theme={theme}>

        <NavBar />

      </ThemeProvider>

    </main>
  );
}

export default App;
