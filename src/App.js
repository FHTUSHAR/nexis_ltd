import { RouterProvider } from 'react-router-dom';
import './App.css';

import { router } from './Router/Router';

function App() {
  return (
    <div className="bg-light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
