import React, { useState } from 'react';


import FlowerCard from '../components/FlowerCard';
import SearchBar from '../components/SearchBar';

const HomePage = ({flowers, onPurchase, onDelete, onUpdate
}) => {
  const [searchTerm, setSearchTerm] = useState(''); 


const normalizedSearchTerm = (searchTerm ?? '').toLowerCase();

const filteredFlowers = Array.isArray(flowers)
  ? flowers.filter(flower =>
      (flower.name ?? '').toLowerCase().includes(normalizedSearchTerm)
    )
  : [];


  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Flower Catalog</h2>

            <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
       onSearch={(term) => setSearchTerm(term)}
      />

      <div className="row">

        {filteredFlowers.length > 0 ? (
    filteredFlowers.map((flower) => (

          <div className="col-md-4 d-flex justify-content-center" key={flower.id}>
            <FlowerCard flower={flower} onPurchase={onPurchase} onDelete={onDelete} onUpdate={onUpdate} />
          </div>
         ))
  ) : (
    <p className="text-center text-muted">No flowers match your search.</p>
  )}
     
    </div>
    </div>
  );
}
export default HomePage;
