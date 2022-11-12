import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
