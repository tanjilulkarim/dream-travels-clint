import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, short, image, _id } = props.service;

    return (


        <div className="col-md-4">
            <div className="card-group">
                <div className="card text-white full">
                    <div className="image-div">
                        <img src={image} height="300px" className="castom card-img" alt="..." />
                    </div>
                    <div className="card-img-overlay">
                        <h2 className="card-title mt-5">{name}</h2>
                        <p className="card-text">{short}</p>

                        <Link to={`/services/${_id}`}>
                            <button type="button" className="btn btn-light">More...</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;