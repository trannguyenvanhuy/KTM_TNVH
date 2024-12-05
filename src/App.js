import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleOrder = (orderData) => {
    if (!user) {
      alert("Vui lòng đăng nhập để đặt hàng.");
      return;
    }

    alert("Đặt hàng thành công!");
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} />
        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} cart={cart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} onOrder={handleOrder} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLogin} />}
          />
          {/* Đã xóa phần đăng ký, không cần Route cho /register */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
