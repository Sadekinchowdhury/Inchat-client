import { RouterProvider } from 'react-router-dom';
import './App.css';
import Route from './Routers/Route';

function App() {
  return (
    <div className="">
      <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;
