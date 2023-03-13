import React from 'react';
import AdminCarousel from './AdminCarousel'
import CreateArticle from './CreateArticle'

const SignUp = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1><AdminCarousel/></h1>
      <h1><CreateArticle/></h1>
    </div>
  );
};

export default SignUp;