import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import NavBar from './Pages/NavBar';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="ProductsPage" element={<ProductsPage />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <Footer />
    {/* <div style={{position: 'sticky', top: 0, zIndex: 4}}>
      <NavBar />
    </div>
    <HomeCarousel />
    <ProductsContainer />
    <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
