import { ShoppingCartOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { Badge, Col, Input, Row, Drawer, Button, Space, Typography, Divider } from "antd";
import { Link } from "react-router-dom";
import { CartItem } from "../types/Types";
import { useState, useEffect } from "react";
const { Search } = Input;
const { Title } = Typography;

interface NavbarProps {
  cartItems: CartItem[];
  onSearch: (searchTerm: string) => void;
}

const Navbar = ({ cartItems, onSearch }: NavbarProps) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-purple-700 shadow-lg' : 'bg-purple-600'
    } text-white p-4`}>
      <div className="container mx-auto">
        <Row gutter={[16, 16]} align="middle" className="w-full">
         
          <Col xs={12} sm={6} md={4} className="flex items-center">
            <Link to="/" className="text-xl font-bold hover:text-blue-200 transition-colors">
              <Title level={4} className="m-0 text-gray-100">Small Shop</Title>
            </Link>
          </Col>

          
          <Col xs={0} sm={0} md={8} className="transition-all">
            <Search
              placeholder="Search products..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={onSearch}
              className="hover:scale-[1.01] transition-transform"
            />
          </Col>

         
          <Col xs={0} sm={0} md={6}>
            <div className="flex justify-between items-center space-x-4">
              <Link to="/" className="hover:text-blue-200 text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-blue-200 transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </div>
          </Col>

          <Col xs={6} sm={6} md={6}>
            <div className="flex items-center justify-end">
              <Link to="/cart" className="hover:text-blue-200 transition-colors p-2">
                <Badge count={cartItemCount} showZero size="small" className="animate-pulse-if-items">
                  <ShoppingCartOutlined className="text-2xl" />
                </Badge>
              </Link>
            </div>
          </Col>

          <Col xs={6} sm={12} md={0} className="flex justify-end">
            <Button 
              type="text" 
              icon={<MenuOutlined className="text-white text-xl" />}
              onClick={() => setDrawerVisible(true)}
              className="border-none hover:bg-purple-500"
            />
          </Col>

         
          <Col xs={24} sm={24} md={0} className="mt-2">
            <Search
              placeholder="Search products..."
              allowClear
              enterButton={<SearchOutlined />}
              size="middle"
              onSearch={onSearch}
            />
          </Col>
        </Row>
      </div>
      
      
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={280}
      >
        <Space direction="vertical" size="large" className="w-full">
          <Link to="/" onClick={() => setDrawerVisible(false)}>
            <Button type="link" block size="large">Home</Button>
          </Link>
          <Divider className="my-1" />
          <Link to="/about" onClick={() => setDrawerVisible(false)}>
            <Button type="link" block size="large">About Us</Button>
          </Link>
          <Divider className="my-1" />
          <Link to="/contact" onClick={() => setDrawerVisible(false)}>
            <Button type="link" block size="large">Contact Us</Button>
          </Link>
          <Divider className="my-1" />
          <Link to="/cart" onClick={() => setDrawerVisible(false)}>
            <Button type="primary" block size="large" icon={<ShoppingCartOutlined />}>
              Cart ({cartItemCount})
            </Button>
          </Link>
        </Space>
      </Drawer>
    </nav>
  );
};

export default Navbar;