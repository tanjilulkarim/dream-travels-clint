import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceInfo = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12 ">
                    <h2>{service.name}</h2>
                    <img src={service.image} alt="" />
                    <p>Description{service.description}</p>
                    <h2>{service.duration}</h2>
                    <h2>${service.price}</h2>
                    <h5>Id: {id}</h5>

                    <button>add to chart go to my order</button>

                    {/* 
                    <Link to={`/services/${_id}`}>
                        <button type="button" className="btn btn-light">add to chart go to my order</button>
                    </Link> */}


                </div>
            </div>
        </div>


    );
};

export default ServiceInfo;