import React, { useState } from 'react';

function AddServiceForm({ addService }) {
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newService.name || !newService.description || !newService.price) {
      alert('All fields are required!');
      return;
    }
    addService(newService);
    setNewService({ name: '', description: '', price: '' });
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="card p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="card-title">Add New Service</h2>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Service Name"
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={newService.price}
            onChange={(e) => setNewService({ ...newService, price: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Service</button>
      </form>
    </div>
  );
}

export default AddServiceForm;
