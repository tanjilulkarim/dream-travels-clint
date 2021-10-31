import React from 'react';
import About from '../About/About';
// import { useEffect } from 'react';
// import { useState } from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

import Services from '../Services/Services';
// import Service from '../Service/Service';


const Home = () => {

    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>


        </div>
    );
};

export default Home;