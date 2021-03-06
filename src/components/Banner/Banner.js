import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={'https://uicreative.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2019/11/23085956/Pinterest_preview3.jpg'} className="d-block w-100 img-fluid" alt="..." />
                    <div className="carousel-caption d-none d-md-block">


                    </div>
                </div>
                <div className="carousel-item">
                    <img src={'https://i.ytimg.com/vi/al7ISy___JE/maxresdefault.jpg'} className="d-block w-100 img-fluid" alt="..." />
                    <div className="carousel-caption d-none d-md-block">


                    </div>
                </div>
                <div className="carousel-item">
                    <img src={'https://www.wallpapertip.com/wmimgs/5-53669_youtube-cover-photo-for-travel.jpg'} className="d-block w-100 img-fluid" alt="..." />
                    <div className="carousel-caption d-none d-md-block">

                        <h1 className="mb-0">Welcome to Dream Travels</h1>

                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        //

    );
};

export default Banner;