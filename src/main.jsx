import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "./Components/themeProvider"; 
import "./main.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
