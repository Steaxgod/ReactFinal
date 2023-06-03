import React, { useContext } from 'react';
import { CardContext } from './CardContext';
import { ThemeContext } from '../../ThemeContext';
import PropTypes from 'prop-types';

import '../../Styles/Card.css';

const Card: React.FC = () => {
  const { cartItems, removeFromCart } = useContext(CardContext);
  const { theme } = useContext(ThemeContext);

  const uniqueItems = Array.from(new Set(cartItems.map(item => item.id)));

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="card">
      <div className="cardContainer" style={{ backgroundColor: theme.nav }}>
        <h2 className="heading" style={{ color: theme.h1 }}>Shopping Card</h2>
        <div className="itemsPurch" >
          {cartItems.length === 0 ? (
            <p className='Error'>No items in the Card</p>
          ) : (
            <ul className="item">
              {uniqueItems.map(itemId => {
                const itemsWithId = cartItems.filter(item => item.id === itemId);
                const item = itemsWithId[0];
                const quantity = itemsWithId.length;

                if (item) {
                  return (
                    <li key={itemId} style={{ backgroundColor: theme.containers }}>
                      <img className='pict' src={item.image} alt={item.name} />
                      <p className='nm'>{item.name}</p>
                      <p className='pr'>${item.price}</p>
                      (#️{quantity})
                      
                      <button className="Del" onClick={() => handleRemoveFromCart(itemId)}>
                        <img src="src\img\trash (1).png" alt="Delete" />
                      </button>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.shape({
    nav: PropTypes.string.isRequired,
    h1: PropTypes.string.isRequired,
    containers: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
