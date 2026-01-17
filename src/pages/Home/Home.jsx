import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#explore-menu') {
      const section = document.getElementById('explore-menu');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Header />
      <ExploreMenu id="explore-menu" category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload id="mobile-app"  category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
