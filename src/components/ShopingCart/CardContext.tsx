import React, { createContext, useState, ReactNode } from 'react';

interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface CardContextType {
  cartItems: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}

export const CardContext = createContext<CardContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

interface CardProviderProps {
  children: ReactNode;
}



export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CardContext.Provider value={{ cartItems, addToCart,removeFromCart, clearCart }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
