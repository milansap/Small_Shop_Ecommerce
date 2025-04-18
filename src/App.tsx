import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartItem, Product, FilterType } from "./types/Types";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Layout from "./components/Layout";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleFilterChange = (
    filterType: FilterType,
    value: string | string[]
  ) => {};

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/"
            element={<Layout cartItems={cartItems} onSearch={handleSearch} />}
          >
            <Route
              index
              element={
                <Home
                  cartItems={cartItems}
                  onAddToCart={addToCart}
                  onFilterChange={handleFilterChange}
                  onSearch={handleSearch}
                  searchTerm={searchTerm}
                />
              }
            />
          </Route>
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onRemoveItem={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
