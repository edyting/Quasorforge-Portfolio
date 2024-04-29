import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/about",element:<About/>}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
}

export default App;
