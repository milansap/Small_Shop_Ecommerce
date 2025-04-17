import { Button, Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Product } from '../types/Types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card
      hoverable
      cover={<img alt={product.name} src={product.image} className="h-48 object-cover" />}
      className="shadow-md"
    >
      <div className="flex flex-col h-full">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 mb-2">Rs. {product.price}</p>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
        <div className="mt-auto">
          <Button 
            type="primary" 
            icon={<ShoppingCartOutlined />} 
            onClick={() => onAddToCart(product)}
            block
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;