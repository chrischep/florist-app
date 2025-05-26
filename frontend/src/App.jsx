import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PurchasedPage from './pages/PurchasedPage';
import AddFlowerPage from './pages/AddFlowerPage';
import Footer from './components/Footer';



function App() {
   const [flowers, setFlowers] = useState([]);
     useEffect(() => {
       fetch('http://localhost:3000/api/flowers')
        .then((res) => res.json())
        .then((data) => setFlowers(data))
        .catch((err) => console.error('Fetch error:', err));
  }, []);
  
  const handlePurchase = (id) => {
    const updated = flowers.map((flower) =>
      flower.id === id ? { ...flower, purchased: true } : flower
    );
    setFlowers(updated);
  };
const handleUpdateFlower = (updatedFlower) => {
  setFlowers(prev =>
    prev.map(flower => (flower.id === updatedFlower.id ? updatedFlower : flower))
  );
};
 const purchasedFlowers = Array.isArray(flowers)
  ? flowers.filter((flower) => flower.purchased)
  : [];


  const handleDelete = async (id) => {
  await fetch(`http://localhost:3000/api/flowers/${id}`, {
    method: 'DELETE',
  });

  setFlowers((prevFlowers) => prevFlowers.filter((flower) => flower.id !== id));
};

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand" to="/">Florist Shop</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/purchased">Purchased</Link>
          <Link className="nav-link" to="/add-flower">Add Flower</Link>
        </div>
      </nav>
      <Routes>
           <Route path="/" element={<HomePage flowers={flowers} onPurchase={handlePurchase} onDelete={handleDelete} onUpdate={handleUpdateFlower}/>} />
           <Route path="/purchased" element={<PurchasedPage flowers={purchasedFlowers} />} />
           <Route path="/add-flower" element={<AddFlowerPage />} /> 

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
