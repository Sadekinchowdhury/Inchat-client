import { RouterProvider } from 'react-router-dom';
import './App.css';
import Route from './Routers/Route';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="">
      <RouterProvider router={Route}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
