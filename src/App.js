import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Bienvenido a UNIQLO"} />} />
        <Route path='/details/:idProducto' element={<ItemDetailContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer greeting={"Bienvenido a UNIQLO"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
