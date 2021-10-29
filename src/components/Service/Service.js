import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { tittle, description, image, id } = props.service;

    return (


        <div className="col-md-4">
            <div className="card-group">
                <div className="card text-white full">
                    <img src={image} height="300px" class="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h2 className="card-title mt-5">{tittle}</h2>
                        <p className="card-text">{description}</p>
                        <Link to={`/services/${id}`}>
                            <button type="button" className="btn btn-light">More...</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;