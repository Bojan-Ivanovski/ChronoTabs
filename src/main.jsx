import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "./Components/themeProvider"; 
import "./main.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Navigation } from './Components/navigationManu';
import { ModeToggle } from './Components/modeToggle';
import { TooltipProvider } from './Components/ui/tooltip';
import { Account } from './account';


const routes = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Navigation></Navigation>}>
      <Route index path='home' element={<></>}></Route>
      <Route index path='planner' element={<><ModeToggle></ModeToggle></>}></Route>
      <Route index path='todo' element={<><ModeToggle></ModeToggle></>}></Route>
      <Route index path='analytics' element={<><ModeToggle></ModeToggle></>}></Route>
    </Route>
    <Route path='/account' element={<Account></Account>}>
      <Route index path='info' element={<>Hello</>}></Route>
      <Route index path='download' element={<>Hello</>}></Route>
      <Route index path='settings' element={<>Hello</>}></Route>
    </Route>
    <Route path='*' element={<><h1>Error</h1></>}></Route>
  </>
))




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TooltipProvider>

    <ThemeProvider>
      <RouterProvider router={routes}></RouterProvider>
    </ThemeProvider>

    </TooltipProvider>
  </React.StrictMode>,
)
