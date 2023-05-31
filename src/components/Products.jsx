import { useFetch } from '../hooks/useFetch';
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { CardContext } from './ShopingCart/CardContext';
import { ThemeContext } from '../ThemeContext';
import '../Styles/Products.css';
import '../Styles/App.css';

function Products() {
  const { data, loading, error } = useFetch('products');
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { addToCart } = useContext(CardContext);

  
  const handleAddToCart = (item) => {
    const newItem = {
      id: item.id,
      name: item.title
    };
    addToCart(newItem);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };


  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <body className="listHolder">
        <div className="bodyList" style={{ backgroundColor: theme.nav }}>
          <h1 className="listH1">List</h1>
          <div className="itemsList">
            {data.map((product) => (
              <div
                className="itemnum"
                style={{ backgroundColor: theme.containers }}
                key={product.id}
              >
                <NavLink className={"itemLink"} to={`/products/${product.id}`}>
                  <img className="imgs" src={product.image} />
                </NavLink>
                <button className="btnLink" onClick={() => handleAddToCart(product)}>
                  <img
                    src="src/img/plus (1).png"
                    className="linkIcons"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </body>
    </div>
  );
}

export default Products;
