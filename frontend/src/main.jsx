import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/home.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.jsx';
import Upload from './pages/Upload.jsx';
import PredictImages from './pages/PredictImages.jsx';
import PredictVideos from './pages/PredictVideos.jsx';
import Monitoring from './pages/Monitoring.jsx';

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
        path: '/upload',
        element: <Upload />,
      },
      {
        path: '/predict-images',
        element: <PredictImages />,
      },
      {
        path: '/predict-videos',
        element: <PredictVideos />,
      },
      {
        path: '/monitoring',
        element: <Monitoring />,
      },
    ],
    errorElement: <div>404 Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
