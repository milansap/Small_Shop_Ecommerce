import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import { CartItem } from '../types/Types';

interface CartPageProps {
  cartItems: CartItem[];
  onRemoveItem: (productId: number) => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
}

const CartPage = ({ cartItems, onRemoveItem, onUpdateQuantity }: CartPageProps) => {
  return (
    <div>
      <Navbar  cartItems={cartItems} />
      <Cart 
        cartItems={cartItems} 
        onRemoveItem={onRemoveItem} 
        onUpdateQuantity={onUpdateQuantity}
      />
    </div>
  );
};

export default CartPage;