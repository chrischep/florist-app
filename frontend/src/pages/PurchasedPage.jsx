import React from 'react';
import FlowerCard from '../components/FlowerCard';

const PurchasedPage = ({ flowers }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Purchased Flowers</h2>
      <div className="row">
        {flowers.length === 0 ? (
          <p className="text-center">No flowers purchased yet.</p>
        ) : (
          flowers.map((flower) => (
            <div className="col-md-4 d-flex justify-content-center" key={flower.id}>
              <FlowerCard flower={{ ...flower, purchased: true }} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PurchasedPage;
