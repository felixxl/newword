import React, { Component } from 'react';
import axios from 'axios';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios.get('/api/articles')
      .then(response => {
        this.setState({ articles: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Liste des articles</h1>
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ArticleList;