import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';
import './App.css';

function App() {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map((service) =>
      service.id === updatedService.id ? updatedService : service
    );
    setServices(updatedServices);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Healthcare Services Management</h1>
      <div className="row">
        <div className="col-md-6">
          <AddServiceForm addService={addService} />
        </div>
        <div className="col-md-6">
          <ServiceList
            services={services}
            updateService={updateService}
            deleteService={deleteService}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
