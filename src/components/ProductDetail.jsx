import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { ThemeContext,  } from '../ThemeContext';
import { useContext,  } from 'react';


import '../Styles/Details.css'
import '../Styles/App.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, data: product, error } = useFetch(`products/${id}`);
  const { theme, toggleTheme } = useContext(ThemeContext)

 

  const handleNavigation = (path) => {
    navigate(path); // Перенаправление на указанный путь
  };

  const backtoproducts = () => {
    navigate('/products');
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div>{error.message}</div>;
  

  
  return (
<div className='cntrl'>
  <div className="iteminf" style={{ backgroundColor: theme.nav}} >
    {product && (
      <>
      <div className='holderDetail'>
        <div className="inf" >
            <img src={product.image} alt={product.title} className='productIMG'/>
        </div>
        <div  className="inf2">
            <h2 style={{color: theme.text}}>{product.title}</h2>
            <p style={{color: theme.text}}>Category: {product.category}</p>
            <p style={{color: theme.text}}>Price: ${product.price}</p>
            <p style={{color: theme.text}}>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <p style={{color: theme.text}}>{product.description}</p>
            <div className="btns">
                <button style={{backgroundColor: theme.btn, color: theme.btnp}} className="backbtn" onClick={backtoproducts}>Back</button>
            </div>
        </div>
 
      </div>
      </>
    )}
  </div>
</div>
  );
};

export default ProductDetail;



