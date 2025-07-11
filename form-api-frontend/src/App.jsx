import './App.css'
import Details from './pages/Details'
import Form from './pages/Form'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserList from './pages/UserList'
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<UserList/>
    },
    {
      path:'/form',
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
