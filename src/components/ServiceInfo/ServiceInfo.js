import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ServiceInfo = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://frightening-mansion-03875.herokuapp.com/services/${id}`)
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



                    <Link to={`/myBooking/${id}`}>
                        <button>add to chart </button>
                    </Link>
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