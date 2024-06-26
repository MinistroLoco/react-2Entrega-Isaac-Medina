import { useState } from "react";
import viteLogo from "/vite.svg";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";

function App() {
  
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  return (
    <>
      <Header allProducts= {allProducts} 
      setAllProducts = {setAllProducts}  
      total={total} 
      setTotal={setTotal} 
      countProducts={countProducts}
      setCountProducts={setCountProducts}/>

      <ProductList allProducts= {allProducts} 
      setAllProducts = {setAllProducts} 
      total={total} 
      setTotal={setTotal}  
      countProducts={countProducts} 
      setCountProducts={setCountProducts}/>
    </>
  );
}

export default App;
