import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/main/App";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
