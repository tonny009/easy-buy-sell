import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { routes } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto ' data-theme="valentine">
      <RouterProvider router={routes}>
        <Toaster />
      </RouterProvider>

    </div>

  );
}

export default App;
