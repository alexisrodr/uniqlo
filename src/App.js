import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/cartContext';
import Cart from './components/Cart';
import Order from './components/Order';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenido a UNIQLO"} />} />
          <Route path='/details/:idProducto' element={<ItemDetailContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer greeting={"Bienvenido a UNIQLO"} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order/:orderNumber' element={<Order />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
