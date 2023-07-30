import {
  Link,
  RouterProvider,
} from 'react-router-dom';
import './App.css'
import { router } from './utils/Router';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
    </>
  )
}

export default App
