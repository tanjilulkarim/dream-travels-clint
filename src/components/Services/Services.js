import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./Home.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>
            <h1 className="mb-5">Most Favorite place for visite</h1>
            <div className="container">
                <div className="row gy-5 mb-5">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;