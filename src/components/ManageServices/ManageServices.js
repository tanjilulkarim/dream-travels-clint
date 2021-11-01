import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch('https://frightening-mansion-03875.herokuapp.com/carts')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [services, isDeleted])

    const handaleDelete = id => {

        const uri = `https://frightening-mansion-03875.herokuapp.com/carts/${id}`;
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
                        setIsDeleted(true);
                    }
                    else {
                        setIsDeleted(false);
                    }
                })
        }

    }



    return (
        <div>
            <h2>Manage all services</h2>

            <div className=" d-flex flex-wrap gy-3  mx-3">

                {
                    services.map(service => <div className="card">
                        <img height="250px" src={service.image} alt="" />
                        <h1>{service?.name}</h1>
                        <h4>{service?.duration}</h4>
                        <h3>$: {service?.price}</h3>
                        <h3> {service?.email}</h3>
                        <button type="button" class="btn btn-danger" onClick={() => handaleDelete(service?._id)} >Delete</button>

                    </div>


                    )
                }
            </div>
        </div>


    );
};

export default ManageServices;