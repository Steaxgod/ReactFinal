import React, { useContext } from 'react';
import { CardContext } from './CardContext';
import { ThemeContext } from '../../ThemeContext';

import '../../Styles/Card.css'

const Card: React.FC = () => {
  const { cartItems } = useContext(CardContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="card">
      <div className="cardContainer" style={{ backgroundColor: theme.nav }}>
        <h2 className="heading" style={{ color: theme.h1 }}>Shopping Cart</h2>
        <div className="itemsPurch" style={{ backgroundColor: theme.containers }}>
          {cartItems.length === 0 ? (
            <p className='Error'>No items in the cart</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
