import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddFlowerPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image_url: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch('http://localhost:3000/api/flowers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
   
    navigate('/');
     } else {
    alert('Failed to add flower.');
  }
};

  return (
    <div className="container mt-5">
      <h2>Add New Flower</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <input name="description" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input name="price" type="number" step="0.01" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Image URL</label>
          <input name="image_url" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Upload</button>
      </form>
    </div>
  );
}

export default AddFlowerPage;
