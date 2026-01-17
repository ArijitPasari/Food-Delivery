import React, { useState, useContext } from 'react'; 
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useContext(StoreContext);
  const cartItemCount = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navbar">
      <Link to = '/'><img src={assets.logo} alt="Logo" className="logo" /></Link>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className={mobileMenuOpen ? 'bar rotate1' : 'bar'}></div>
        <div className={mobileMenuOpen ? 'bar fade' : 'bar'}></div>
        <div className={mobileMenuOpen ? 'bar rotate2' : 'bar'}></div>
      </div>

      <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
  <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
  <Link to="/#explore-menu" onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}> menu</Link>
  <Link to='/mobile-app' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</Link>
  <Link to='/contact' onClick={() => setMenu('contact us')} className={menu === 'contact us' ? 'active' : ''}>contact us</Link>
</ul>


      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <Link to = '/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          {cartItemCount >0 && <div className="dot">{cartItemCount}</div>}
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
