import React, { useState, useEffect } from 'react';
import { getArticles } from '../services/articleService';
import "../assets/scss/components/ArticleList.scss"


function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="container-article">
      <div className="row">
        {articles.map(article => (
          <div className="col-md-4 mb-4" key={article.id}>
            <a href={`/article/${article.id}`} className="article-link">
              <div>
                <h2 className='NameOfArticle'>{article.title}</h2>
                <p>Organisateur:</p>
                <p>{article.organizer}</p>              
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;