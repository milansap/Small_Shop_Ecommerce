import { Button, Card, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Product } from "../types/Types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const handleAddToCart = () => {
    try {
      onAddToCart(product);
      
      message.success({
        content: `${product.name} added to cart!`,
        duration: 2,
        style: {
          marginTop: '20px',
        },
      });
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      message.error("Failed to add product to cart");
    }
  };
  return (
    <Card
      hoverable
      cover={
        <img
          alt={product.name}
          src={product.image}
          className="h-48 object-cover"
        />
      }
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
            onClick={handleAddToCart}
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
