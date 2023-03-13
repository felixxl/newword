import React, { useState } from 'react';

function AdminCarouselPage() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');

  const handleImageChange = event => setImage(event.target.files[0]);
  const handleTitleChange = event => setTitle(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);

    fetch('../../api/carousel', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h1>Admin Carousel</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" className="form-control-file" id="image" accept="image/*" onChange={handleImageChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={handleTitleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AdminCarouselPage;