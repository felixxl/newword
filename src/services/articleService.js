
export const getArticles = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/article/articles.php');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/article/article.php?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    throw error;
  }
};