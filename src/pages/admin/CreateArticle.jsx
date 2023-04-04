import React, { useState } from 'react';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [schedule, setSchedule] = useState('');
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('organizer', organizer);
    formData.append('schedule', schedule);
    if (image) {
      formData.append('image', image);
    }

    fetch('http://127.0.0.1:8000/article/articles.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSuccessMessage('Article créé avec succès');
      })
      .catch(error => {
        console.error('Erreur lors de la création de l\'article:', error);
      });
  };

  return (
    <div>
      <h1>Créer un article</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Prix:
          <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Organisateur:
          <input type="text" value={organizer} onChange={(e) => setOrganizer(e.target.value)} />
        </label>
        <label>
          Horaires:
          <textarea value={schedule} onChange={(e) => setSchedule(e.target.value)} />
        </label>
        <label>
          Image:
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <button type="submit">Créer l'article</button>
    </form>
    {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
  </div>
  );
}

export default CreateArticle;