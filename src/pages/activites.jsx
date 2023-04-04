import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';
import { getArticles } from '../services/articleService';
import "../assets/scss/app.scss";

const Activites = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(data => setArticles(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className='Title'>Activités</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default Activites;