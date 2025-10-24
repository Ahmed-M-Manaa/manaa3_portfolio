import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter, Route , Router, Routes,BrowserRouter  } from 'react-router-dom'
import Home from './Components/Home/Home'
import Project from './Components/Project/Project'
import Error from './Components/Error/Error'
import LayOut from './Components/LayOut/LayOut'
import About from './Components/About/About'
import Testimonial from './Components/Testmonial/Testimonial'
import Contact from './/Components/Home/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)



  const coustomRouter = createBrowserRouter ([
  {path:'',
    element:<LayOut/>,
     children:[
{index:true , element:<Home/>},
{path:'home', element:<Home/>},
{path:'#project', element:<Project/>},
{path:'#about', element:<About/>},
{path:'#testimonial', element:<Testimonial/>},
{path:'#contact', element:<Contact/>},
{path:'*', element:<Error/>},
    ]
  }
])



  return (
    <>
 <RouterProvider router={coustomRouter}/>

    </>
  )
}

export default App
