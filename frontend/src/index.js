import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
