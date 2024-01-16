import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Footer from '../components/footer.tsx';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
)