import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Utilitybar } from './components/Navbar/Utilitybar/Utilitybar';


function App() {
  return (
    <BrowserRouter>

      <Navbar></Navbar>
      <Routes>
        <Route path='/products/slug/:slug' element={<ProductScreen />}></Route>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
      {/* <Utilitybar></Utilitybar> */}

    </BrowserRouter>
  );
}

export default App;
