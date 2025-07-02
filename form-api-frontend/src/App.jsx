import './App.css'
import Details from './pages/Details'
import Form from './pages/Form'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Form/>
    },
    {
      path:"/user",
      element:<Details/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
