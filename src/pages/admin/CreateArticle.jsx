import React, { useState } from 'react';

function AdminPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [animator, setAnimator] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleTitleChange = event => setTitle(event.target.value);
  const handleDescriptionChange = event => setDescription(event.target.value);
  const handleAnimatorChange = event => setAnimator(event.target.value);
  const handlePhotoChange = event => setPhoto(event.target.files[0]);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('animator', animator);
    formData.append('photo', photo);

    fetch('/api/articles', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h1>Admin</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={handleTitleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" value={description} onChange={handleDescriptionChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="animator">Animator</label>
          <input type="text" className="form-control" id="animator" value={animator} onChange={handleAnimatorChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo</label>
          <input type="file" className="form-control-file" id="photo" accept="image/*" onChange={handlePhotoChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AdminPage;