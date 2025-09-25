import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import theme from './Theme';
import { globalMarqueeKeyframes } from './components/style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <GlobalStyles styles={globalMarqueeKeyframes} />
    <BrowserRouter>
     <ThemeProvider theme={theme}>
     <CssBaseline />
      <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

