import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import Doctors from './Pages/Home/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import AddProduct from './Pages/Products/AddProduct/AddProduct';
import AddCategory from './Pages/Products/Category/AddCategory';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';

import Header from './Pages/Shared/Header/Header';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  },[])
  return (
    <div className="App">
{
  loading ? 
<img src="https://cdn.dribbble.com/users/20130/screenshots/2933302/carrello-800600.gif" alt=""/>
  :
<BrowserRouter>
      <Header/><br/><br/><br/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="addCategory" element={<AddCategory />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="login" element={<Login />} />
          <Route path="products/:categoryName" element={<Products/>} />
          <Route path="product_details/:id" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
}
      
    </div>
  );
}

export default App;
