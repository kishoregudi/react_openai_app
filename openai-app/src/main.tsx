import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import InputBox from './input.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <InputBox />
  </React.StrictMode>,
)