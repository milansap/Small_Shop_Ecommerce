import { useState, useEffect } from "react";

import { CartItem, Product, FilterType } from "../types/Types";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";

interface HomeProps {
  cartItems: CartItem[];
  onAddToCart: (product: Product) => void;
  onFilterChange: (filterType: FilterType, value: string | string[]) => void;
  onSearch: (searchTerm: string) => void;
}

const Home = ({
  cartItems,
  onAddToCart,
  onFilterChange,
  onSearch,
}: HomeProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const mockProducts: Product[] = [
    {
      id: 1,
      name: "Handmade Wool Scarf",
      price: 1500,
      description: "Traditional Nepali wool scarf",
      image: "./images/images.jpg",
      category: "clothing",
    },
    {
      id: 2,
      name: "Singing Bowl",
      price: 3500,
      description: "Tibetan singing bowl for meditation",
      image: "./images/images1.jpg",
      category: "handicraft",
    },
    {
      id: 3,
      name: "Pashmina Shawl",
      price: 4500,
      description: "Luxurious pashmina shawl",
      image: "./images/images3.jpg",
      category: "clothing",
    },
    {
      id: 4,
      name: "Nepali Tea Set",
      price: 2500,
      description: "Traditional Nepali tea set",
      image: "./images/images4.jpg",
      category: "handicraft",
    },
    {
      id: 5,
      name: "Himalayan Salt Lamp",
      price: 1800,
      description: "Natural salt lamp from Himalayas",
      image: "./images/product_image-17-2387.png",
      category: "handicraft",
    },
    {
      id: 6,
      name: "Dhaka Topi",
      price: 1200,
      description: "Traditional Nepali hat",
      image: "./images/images6.jpg",
      category: "clothing",
    },
  ];

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Filters onFilterChange={onFilterChange} onSearch={onSearch} />
      <ProductGrid products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Home;
