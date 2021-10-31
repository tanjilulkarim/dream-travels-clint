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
        <div className="container bg-success text-white">
            <div className="row">
                <div className="col-12 col-md-12 ">
                    <h2>{service.name}</h2>
                    <img className="mb-3 " src={service.image} alt="" />
                    <p> <b>Description</b> :{service.description}</p>
                    <h3>Our Offer: {service.duration}</h3>
                    <h2>Price: ${service.price}</h2>



                    <Link to={`/myBooking/${id}`}>
                        <button type="button" className="btn btn-primary mb-2">Add to cart</button>
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