import { useState, useEffect } from "react";

import { CartItem, Product, FilterType } from "../types/Types";

import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import { Button } from "antd";

interface HomeProps {
  cartItems?: CartItem[];
  onAddToCart: (product: Product) => void;
  onFilterChange: (filterType: FilterType, value: string | string[]) => void;
  onSearch?: (searchTerm: string) => void;
  searchTerm?: string;
}

const Home = ({
  onAddToCart,
  onFilterChange,
 
  searchTerm: propSearchTerm,
}: HomeProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortFilter, setSortFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);

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
    setFilteredProducts(mockProducts);
  }, []);

  const handleLocalFilterChange = (
    filterType: FilterType,
    value: string | string[]
  ) => {
    if (filterType === "sort") {
      setSortFilter(value as string);
    } else if (filterType === "category") {
      setCategoryFilter(value as string[]);
    }

    onFilterChange(filterType, value);
  };

  
  useEffect(() => {
    let result = [...products];

    if (propSearchTerm !== undefined) {
      setSearchTerm(propSearchTerm);
    }

    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(lowercaseSearch) ||
          product.description.toLowerCase().includes(lowercaseSearch) ||
          product.category.toLowerCase().includes(lowercaseSearch)
      );
    }

    if (categoryFilter.length > 0) {
      result = result.filter((product) =>
        categoryFilter.includes(product.category)
      );
    }

    if (sortFilter) {
      switch (sortFilter) {
        case "price_asc":
          result = [...result].sort((a, b) => a.price - b.price);
          break;
        case "price_desc":
          result = [...result].sort((a, b) => b.price - a.price);
          break;
        case "name_asc":
          result = [...result].sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name_desc":
          result = [...result].sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }
    }

    setFilteredProducts(result);
  }, [products, searchTerm, propSearchTerm, sortFilter, categoryFilter]);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 ">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-8">
        <div className="px-4 md:px-8 lg:px-16 text-center md:text-left w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Authentic Nepali Handicrafts & Treasures
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto md:mx-0">
            Discover unique handcrafted treasures from the heart of the
            Himalayas. Each item tells a story of Nepal's rich cultural heritage
            and skilled artisans.
          </p>
          <div className="space-x-4 gap-4 flex justify-center md:justify-start">
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#d97706",
                borderColor: "#d97706",
              }}
            >
              Shop Now
            </Button>
            <Button
              size="large"
              style={{ borderColor: "#d97706", color: "#d97706" }}
              className="hover:border-amber-700 hover:text-amber-700"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-400 h-64 md:h-screen">
          <img src="./images/store-4945671_1280.jpg" alt="Nepali Handicrafts" className="h-full w-full object-cover object-center" />
        </div>
      </div>

      <Filters onFilterChange={handleLocalFilterChange} />
      <ProductGrid products={filteredProducts} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Home;
