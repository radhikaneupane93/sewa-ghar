import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes/router'
import { Toaster } from '@/components/ui/toaster.tsx'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
