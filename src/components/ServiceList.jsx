import React, { useState } from 'react';

function ServiceList({ services, updateService, deleteService }) {
  const [editMode, setEditMode] = useState(null);
  const [updatedService, setUpdatedService] = useState({
    id: '',
    name: '',
    description: '',
    price: ''
  });

  const handleEdit = (service) => {
    setEditMode(service.id);
    setUpdatedService(service);
  };

  const handleUpdate = () => {
    updateService(updatedService);
    setEditMode(null);
  };

  return (
    <div>
      <h2 className="mb-4">Service List</h2>
      <ul className="list-group">
        {services.map((service) => (
          <li key={service.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editMode === service.id ? (
              <div className="w-100">
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    value={updatedService.name}
                    onChange={(e) =>
                      setUpdatedService({ ...updatedService, name: e.target.value })
                    }
                  />
                </div>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    value={updatedService.description}
                    onChange={(e) =>
                      setUpdatedService({
                        ...updatedService,
                        description: e.target.value
                      })
                    }
                  />
                </div>
                <div className="input-group mb-2">
                  <input
                    type="number"
                    className="form-control"
                    value={updatedService.price}
                    onChange={(e) =>
                      setUpdatedService({
                        ...updatedService,
                        price: e.target.value
                      })
                    }
                  />
                </div>
                <button className="btn btn-success me-2" onClick={handleUpdate}>Save</button>
                <button className="btn btn-secondary" onClick={() => setEditMode(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <div>
                  <strong>{service.name}</strong>: {service.description} (${service.price})
                </div>
                <div>
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(service)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => deleteService(service.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
