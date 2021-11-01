import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './ServiceInfo.css'



const ServiceInfo = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    const { user, } = useAuth();
    service.email = user?.email;
    // service.phone = document.getElementById


    useEffect(() => {
        fetch(`https://frightening-mansion-03875.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id]);


    const orderHandler = () => {

        fetch(`https://frightening-mansion-03875.herokuapp.com/carts`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                alert('You add a offer successfully please check your order history')
            })


    }

    return (
        <div className="bg-success text-white">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 ">
                        <div className="style-details">
                            <h2>{service.name}</h2>
                            <img className="mb-3 border border-4" height="250px" src={service.image} alt="" />
                            <p className="mb-1 "> <b>Description</b> :{service.description}</p>
                            <h3>Our Offer: {service.duration}</h3>
                            <h2>Price: ${service.price}</h2>

                            <button onClick={orderHandler} type="button" className="btn btn-primary mb-2">Add to cart</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-4  ">
                        <div className="style">
                            <aside className="input-area mt-5">
                                <h5>Your information please provide</h5>
                                <h6>Fill the form</h6>
                                <input type="text" value={user?.displayName} />
                                <input type="text" value={user?.email} /><br />
                                <input type="text" id="userNumber" placeholder="Phone Number" />
                                <input type="text" id="userAddress" placeholder="Address" /><br />
                                <input type="submit" className=" btn-success mb-2 mt-2" />
                            </aside>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    );
};

export default ServiceInfo;