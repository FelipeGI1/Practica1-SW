import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/home.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.jsx';
import ImagePredict from './pages/ImagePredict.jsx';
import VideoPredict from './pages/VideoPredict.jsx';
import CameraPredict from './pages/CameraPredict.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/imagenes',
        element: <ImagePredict />,
      },
      {
        path: '/videos',
        element: <VideoPredict />,
      },
      {
        path: '/camara',
        element: <CameraPredict />,
      },
    ],
    errorElement: <div>404 Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
