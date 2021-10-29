import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import Banner from '../Banner/Banner';

import Services from '../Services/Services';
// import Service from '../Service/Service';


const Home = () => {
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('./Home.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data))

    // }, [])

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            {/* <div className="container">
                <h2>Our Offer for you!!!!!</h2>
                <div className="row gy-5 mb-3">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div> */}

        </div>
    );
};

export default Home;