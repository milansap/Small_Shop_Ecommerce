import { Table, Button, InputNumber, Space, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { CartItem } from '../types/Types';

const { Text, Title } = Typography;

interface CartProps {
  cartItems: CartItem[];
  onRemoveItem: (productId: number) => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
}

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }: CartProps) => {
  const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `Rs. ${price}`,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity: number, record: CartItem) => (
        <InputNumber 
          min={1} 
          max={10} 
          defaultValue={quantity} 
          onChange={(value: number | null) => value && onUpdateQuantity(record.id, value)}
        />
      ),
    },
    {
      title: 'Total',
      key: 'total',
      render: (_: any, record: CartItem) => `Rs. ${record.price * record.quantity}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: CartItem) => (
        <Button 
          danger 
          icon={<DeleteOutlined />} 
          onClick={() => onRemoveItem(record.id)}
        />
      ),
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="p-4">
      <Title level={4}>Your Shopping Cart</Title>
      <Table 
        columns={columns} 
        dataSource={cartItems} 
        pagination={false}
        rowKey="id"
      />
      <div className="text-right mt-4">
        <Text strong className="text-lg">Total: Rs. {total}</Text>
      </div>
      <div className="text-right mt-4">
        <Button type="primary" size="large">Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;