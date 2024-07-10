import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

const nidotheme = createTheme({
  palette: {
    primary: {
      main: "#be0000"
    }
  },
  typography: {
    fontFamily: 'Barlow, sans-serif;',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: '1240px',
          paddingLeft: '20px',
          paddingRight: '20px',
          '@media (max-width: 600px)': {
            paddingLeft: '15px',
            paddingRight: '15px',
          },
          '@media (min-width: 600px)': {
            paddingLeft: '20px',
            paddingRight: '20px',
          },
          '@media (min-width: 1200px)': {
            maxWidth: '1240px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      },
    }, 
  },
});

const root = ReactDOM.createRoot(document.getElementById('nidoRoot'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={nidotheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
