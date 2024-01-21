import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./NavBar/NavBar"
import Categoryfilter from "./features/CategoryFilter/Categoryfilter"
import SignupPage from  "./pages/SignupPage"
import LoginInPage from "./pages/LoginInPage"
import Home from "./pages/Home"
import CartPage from './pages/CartPage'
import ProductDetails from "./pages/ProductDetails"
import CheckOut from './pages/CheckOut'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/SignUp',
    element:<SignupPage/>
  },
  {
    path:'/Login',
    element:<LoginInPage/>
  },
  {
    path:'/Cart',
    element:<CartPage/>
  },
  {
    path:"ProductDetails",
    element:<ProductDetails/>
  },{
    path:"/CheckOut",
    element:<CheckOut/>
  }

])

function App() {
  const [count, setCount] = useState(0)

  return (
   <><NavBar />
   <RouterProvider router={router}/></>
  )
}

export default App
