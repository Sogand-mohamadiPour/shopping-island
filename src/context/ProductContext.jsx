import { createContext, useContext, useEffect, useState } from 'react'

import { apiproducts } from '../services/config';

const productcontext = createContext();

const ProductProvider = ({ children }) => {

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await apiproducts.get('/products');
        setProducts(res);
      }
      catch (error) {
        setError404(error.message)
      }
    }
    fetchdata();
  }, [])
  // ---------------------------------------------------
  const [error404, setError404] = useState('');
  const [products, setProducts] = useState([]);
  // ---------------------------------------------------
  return (
    <productcontext.Provider value={{ products, error404 }}  >
      {children}
    </productcontext.Provider>
  )
}

// custom hooks
const useProducts = () => {
  const x = useContext(productcontext);
  return x;
}


const useDetailIdProduct = (id) => {
  const allProducts = useProducts();
  const temp = allProducts.find(item => item.id == id);
  return temp;
}
// ------------------------------------------

export default ProductProvider
export { useProducts, useDetailIdProduct };