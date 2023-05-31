// Base Imports
import React from 'react';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import Card from './components/ShopingCart/Card';
import ToggleSwitch from './components/ThemeMode/ToggleSwitch';
// -------------->>
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeContext,  } from './ThemeContext';
import { useContext,  } from 'react';

// CSS Imports
import './Styles/App.css';
import './Styles/Cart.css';
import './Styles/Home.css';
import './Styles/Navbar.css';
import './Styles/Toggle.css';

/*      *** IMPORTANT NOTES ***



      Everything that needs to be installed.

      1. npm install
      2. npm install react-router-dom
      3. npm install -g json-server
      4. npm install axios
      5. npm install @reduxjs/toolkit
      6. npm install react-redux


      Turn on db.json

      1. json-server -w db.json

      To run

      1. npm run dev
*/



function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Перенаправление на указанный путь
  };

  return (

    <div >
      <nav style={{ backgroundColor: theme.nav}}>
        <div className="NavLinks" >
          <button className="btnLink" onClick={() => handleNavigation('/products')}>
            <img src="src/img/shopping-bag (1).png" className="linkIcons" />
          </button>
          <button className="btnLink" onClick={() => handleNavigation('/')}>
            <img src="src/img/home (1).png" className="linkIcons" />
          </button>
          <button className="btnLink" onClick={() => handleNavigation('/card')}>
            <img src="src/img/shopping-online (1).png" className="linkIcons" />
          </button>
        </div>
      </nav>
      <div className="themeButton">
        <ToggleSwitch onToggle={toggleTheme} className="themeChange" />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/card" element={<Card />} /> 
      </Routes>
  </div>
  );
}

export default App

function Home()
{
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
  // Full home page holder
  <div className='homePG'>

    {/* Title  */}
    <h1 className='homeTitle' style={{ color: theme.h1}}>Welcome</h1>

    {/* Card holder */}
    <div className='itemCards'>
      <div className='cardSelf'>
        <img src="src\img\responsive.png" className='cardIcon'/>
      </div>

      <div className='cardSelf'>
      <img src="src\img\car.png" className='cardIcon'/>
      </div>

      <div className='cardSelf'>
      <img src="src\img\shopping-bag (2).png" className='cardIcon'/>
      </div>

      <div className='cardSelf'>
      <img src="src\img\laundry.png" className='cardIcon'/>
      </div>

      <div className='cardSelf'>
      <img src="src\img\jewelry.png" className='cardIcon'/>
      </div>
    </div>
    {/* Video holder */}
    <div className='video'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WDZZDp_Bjl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
    );
  

}


