import React from 'react';
import Test from '../Test/Test';
import './About.css';

const About = () => {
    return (
        <div className="container">


            <div className="row py-5 my-5">
                <img src={'https://www.freepngimg.com/download/welcome/26832-4-welcome-hd.png'} alt="" />
                <Test></Test>
                {/* <h1 className="text-center  mb-5 about-tittle ">Dream Travels</h1> */}
                <div className="col-12 col-lg-6">
                    <h3 className="text-primary text-center">About Us</h3>
                    <img className="border border-5  " height="457px" width="100%" src={'https://befamilytravel.com/wp-content/uploads/2020/05/Family-Travel-Quotes-Blog-Banner.png'} alt="" />
                    <h5 className="text-success text-center mt-2">Dream Travels  is one the most pupular Travels website in Bangladesh</h5>
                    <p>Reasons for traveling include recreation,[4] holidays,[5] tourism[4] or vacationing,[4] research travel,[4] the gathering of information, visiting people, volunteer travel for charity, migration to begin life somewhere else, religious pilgrimages[4] and mission trips, business travel,[4] trade,[4] commuting, and other reasons, such as to obtain health care[4] or waging or fleeing war or for the enjoyment of traveling. Travelers may use human-powered transport such as walking or bicycling; or vehicles, such as public transport, automobiles, trains, ferries, boats, cruise ships and airplanes.</p>
                    <br />
                    <p></p>
                </div>
                <div className="col-12 col-lg-6">
                    <h3 className="text-primary text-center">Our Vision</h3>
                    <img className="border border-5" height="457px" width="100%" src={'https://www.livingoutlau.com/wp-content/uploads/2021/03/Travel-With-Kids-Quotes.jpg'} alt="" />
                    <p className="text-success text-center mt-2">
                        "Honest is the best business policy. We work with honetly.We ensure good service and offer value Money"
                    </p>
                    <p className="text-primary text-center mt-2">
                        "Honest is the best business policy. We work with honetly.We ensure good service and offer value Money"
                    </p>
                    <p className="text-secondary text-center mt-2">
                        "Ensure more less than price in market and ensure castomer satisfaction"

                    </p>


                </div>
            </div>

            <div className="container-ceo">
                <div className="row">
                    <h2 className="tittle-text">Our honorable CEO</h2>
                    <div className="col-12 col-md-6 ">
                        <img src={'https://media-exp1.licdn.com/dms/image/C5103AQFqx7Wf9O-atA/profile-displayphoto-shrink_200_200/0/1565948545370?e=1639008000&v=beta&t=Lr-2HoyKrTCkk2ukNi9mvfXYa5JNVEW6IYukjWIj9A0'} alt="" />
                        <br />
                        <br />
                        <h4 className="text-decoration-none"><a href="https://www.facebook.com/tanjil.karim.58" target="_blank" rel="noreferrer">Tanjilul karim</a></h4>
                        <br />

                    </div>
                    <div className="col-12 col-md-6 img-ceo">
                        <img height="150px" src={'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/163232144/original/3d509828e3481cf3a1c38c82fb807c3aa55af7df/create-speech-bubble-qutation-posters-and-add-speech-bubble-on-your-photos.png'} alt="" />
                        <h5 className="text-success text-center mt-2"><blockquote>
                            ""Honest is the best business policy. We work with honetly.We ensure good service and offer value Money""
                        </blockquote></h5>
                    </div>
                    <br />
                    <br />
                    <hr />
                </div>


            </div>


        </div>
    );
};

export default About;