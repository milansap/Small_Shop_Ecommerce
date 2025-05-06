import { Row, Col } from 'antd';
import ProductCard from './ProductCard';
import { Product } from '../types/Types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
  return (
    <Row gutter={[16, 16]} className="p-4 ">
      {products.map((product) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;