import React from 'react';
import './Header.css';

const Header = () => {
  const handleViewMenuClick = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
      <img src='/header_img.png' alt="" className='header-banner' />
      <div className="header-contents">
        <h2>Order Your Favorite Food Here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients
          to satisfy your cravings and elevate your dining experience — one delicious meal at a time.
        </p>
        <button onClick={handleViewMenuClick}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
