import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';

const router = createBrowserRouter([
  {
    element:
    (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  }
])

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}
