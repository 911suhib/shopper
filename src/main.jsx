import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ShopContextProvider from './Context/ShopContext'; // تأكد من استيراده

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider> {/* لف التطبيق بمزود السياق */}
      <App />
    </ShopContextProvider>
  </StrictMode>,
);
