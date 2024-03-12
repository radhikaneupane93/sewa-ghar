import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes/router'
import { Toaster } from '@/components/ui/toaster.tsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={1000}/>

      <Toaster />
    </>
  )
}

export default App
