import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

// ---------------------------------------------------
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Basket from "./pages/Basket";
import PageProducts from "./pages/PageProducts";
import DetailsProduct from "./pages/DetailsProduct";

import ThemeProvider from "./context/ThemeContext";
import Basketprovider from "./context/basket/BasketContext";
import ProductProvider from "./context/ProductContext";


function App() {
  return (
    <ThemeProvider>
      <Basketprovider>
        <ProductProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<PageProducts />} />
              <Route path="/products/:id" element={<DetailsProduct />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/about" element={<About />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Layout>
        </ProductProvider>
      </Basketprovider>
    </ThemeProvider>
  );
}

export default App;
