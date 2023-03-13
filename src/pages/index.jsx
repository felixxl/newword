import React from 'react';
import Carousel from '../components/Carousel';
import "../assets/scss/app.scss";

const Home = () => {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }}
  >
      <div className="App">
        <Carousel/>
      </div>
    </div>
  );
};

export default Home;