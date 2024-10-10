import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ImageContextProvider from './context/ImageContextProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ImageContextProvider>
        <App />
      </ImageContextProvider>
    </BrowserRouter>

  </StrictMode>,
)
