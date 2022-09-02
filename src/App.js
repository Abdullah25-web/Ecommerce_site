import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./componentApi/Context";

function App() {
  return (
    <CartProvider>
      <div className="App">
        {/* <MyContext.Provider> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="home" element={<Home />} />
            <Route path="category" element={<CategoryPage />} />
            <Route path="product" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
        {/* </MyContext.Provider> */}
      </div>
    </CartProvider>
  );
}

export default App;
