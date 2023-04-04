import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../services/articleService';

function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleById(id)
      .then(data => setArticle(data));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <img src={`http://127.0.0.1:8000/${article.image_path}`} alt={article.title} />
      <p>{article.description}</p>
      <p>Prix: {article.price} €</p>
      <p>Organisateur: {article.organizer}</p>
      <p>Horaires: {article.schedule}</p>
    </div>
  );
}

export default ArticleDetails;
