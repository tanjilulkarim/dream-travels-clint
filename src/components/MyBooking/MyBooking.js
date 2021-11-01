import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyBooking = () => {
    const { email } = useParams();


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://frightening-mansion-03875.herokuapp.com/carts/${email}`)
            .then(res => res.json())
            .then(data => setServices(data))

    }, [services])

    const handaleDelete = id => {

        const uri = `http://localhost:5000/carts/${id}`;
        const exist = window.confirm("Are You sure want to delete ??");
        if (exist) {
            fetch(uri, {
                method: "DELETE",

            })

                .then()
                .then(data => {
                    if (data.deleteCount > 0) {
                        alert('Delete sucessfully');
                        const remainingProduct = services.filter(product => product._id !== id)
                        setServices(remainingProduct);
                    }
                })
        }

    }



    return (


        <div className="container">
            <h1>My booking history </h1>
            <div className="col-12 col-md-4 mb-3">
                {
                    services.map(service => <div key={service._id}>
                        {/* <div className="card">
                                <img src={service.image} alt="" />
                                <h3>{service?.name}</h3>
                                <h5>{service.duration}</h5>
                                <h5>Price:{service.price}</h5>
                                <button type="button" class="btn btn-danger" onClick={() => handaleDelete(service?._id)} >Delete</button>
                            </div> */}
                        <div className="card " >
                            <img src={service.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service?.name}</h5>
                                <p className="card-text">{service.duration}</p>
                                <h5>$: {service.price}</h5>
                                <button type="button" className="btn btn-danger" onClick={() => handaleDelete(service?._id)} >Delete</button>
                            </div>
                        </div>
                    </div>)
                }




            </div>
        </div>


    );
};

export default MyBooking;