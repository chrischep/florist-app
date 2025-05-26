import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="row mb-4 justify-content-center">
      <div className="col-md-6 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search flowers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-outline-primary"
          onClick={() => (onSearch ? onSearch((searchTerm ?? '').trim()) : null)}


        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
