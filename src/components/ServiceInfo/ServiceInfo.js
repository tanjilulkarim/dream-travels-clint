import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div>
            <h2>Deatails of {service.name}</h2>
            <p>Description{service.description}</p>
            <img src={service.img} alt="" />
            <h2>this is booking: {id}</h2>

        </div>
    );
};

export default Booking;