import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ChakraProvider> */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
      {/* </ChakraProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
