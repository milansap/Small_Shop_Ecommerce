import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { CartItem } from "../types/Types";


interface LayoutProps {
  cartItems: CartItem[];
  onSearch: (searchTerm: string) => void;
}

const layout = ({ cartItems,onSearch }: LayoutProps) => {

  
  return (
    <>
      <Navbar cartItems={cartItems} onSearch={onSearch} />
      <Outlet />
      <Footer />
    </>
  );
};

export default layout;
