import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Home from './pages/home.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <div>404 Not Found</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
