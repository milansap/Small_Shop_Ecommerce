export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export type FilterType = 'sort' | 'category';
  export type FilterValue = string | string[];