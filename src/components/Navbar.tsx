import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import { CartItem } from '../types/Types';

interface NavbarProps {
  cartItems: CartItem[];
}

const Navbar = ({ cartItems }: NavbarProps) => {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-purple-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Small Shop</Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/cart" className="hover:text-blue-200">
            <Badge count={cartItemCount} showZero>
              <ShoppingCartOutlined className="text-2xl" />
            </Badge>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;