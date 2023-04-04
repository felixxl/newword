import React, { useState } from 'react';

function AdminCarouselPage() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');

  const handleImageChange = event => setImage(event.target.files[0]);
  const handleTitleChange = event => setTitle(event.target.value);
  const [successMessage, setSuccessMessage] = useState('');

const handleSubmit = event => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('image', image, image.name);
  formData.append('title', title);

  fetch('http://127.0.0.1:8000/carousel/carousel.php', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setSuccessMessage("L'image a été ajoutée avec succès.");
    })
    .catch(error => {
      console.error(error);
      setSuccessMessage(''); // Réinitialiser le message de réussite en cas d'erreur
    });
};
  

  return (
    <div className="container">
      <h1>Admin Carousel</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" className="form-control-file" id="image" accept="image/*" onChange={handleImageChange} required name="image" /> {/* Ajout du champ "name" */}
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={handleTitleChange} required name="title" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
  </div>
  );
}

export default AdminCarouselPage;