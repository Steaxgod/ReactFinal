import React, { createContext, useState, ReactNode } from 'react';

interface Item {
  id: number;
  name: string;
  // Add other properties of your item here
}

interface CardContextType {
  cartItems: Item[];
  addToCart: (item: Item) => void;
}

export const CardContext = createContext<CardContextType>({
  cartItems: [],
  addToCart: () => {},
});

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CardContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CardContext.Provider>
  );
};
