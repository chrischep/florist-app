import React, { useState } from 'react';

const FlowerCard = ({ flower, onPurchase, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: flower.name,
    description: flower.description,
    price: flower.price,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/api/flowers/${flower.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(updatedFlower => {
        onUpdate(updatedFlower);
        setIsEditing(false);
      })
      .catch(err => console.error("Update failed", err));
  };

  return (
    <div className="card m-3 shadow" style={{ width: '18rem' }}>
      <img
        src={flower.image_url}
        className="card-img-top"
        alt={flower.name}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        {isEditing ? (
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control mb-1"
              placeholder="Name"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control mb-1"
              placeholder="Description"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Price"
              step="0.01"
            />
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-sm btn-success">Save</button>
              <button type="button" className="btn btn-sm btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          <>
            <h5 className="card-title">{flower.name}</h5>
            <p className="card-text text-muted">{flower.description || 'No description available'}</p>
            <p className="card-text fw-bold">${parseFloat(flower.price).toFixed(2)}</p>
            <div className="d-flex gap-2">
              {!flower.purchased && onPurchase && (
                <button className="btn btn-sm btn-danger" onClick={() => onPurchase(flower.id)}>Purchase</button>
              )}
              <button className="btn btn-sm btn-outline-primary" onClick={() => setIsEditing(true)}>Edit</button>
              {onDelete && (
                <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(flower.id)}>Delete</button>
              )}
            </div>
            {flower.purchased && <span className="badge bg-success mt-2">Purchased</span>}
          </>
        )}
      </div>
    </div>
  );
};

export default FlowerCard;
