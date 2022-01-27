import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
    return (
        <div className="banner-style">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 banner-container" src="https://i.ibb.co/bgwbKy3/bg1.jpg" alt="first slide" />
                    <Carousel.Caption>
                        <h2>Beautiful </h2>
                        <h3>Greece</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block banner-container w-100" src="https://i.ibb.co/f07YFJn/bg2.jpg" alt="Second slide" />

                    <Carousel.Caption>
                        <h2>Historic </h2>
                        <h3>LandMarks</h3>
                        <p>Its dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block banner-container w-100" src="https://i.ibb.co/bgPC7vb/bg3.jpg" alt="Third slide" />

                    <Carousel.Caption>
                        <h2>Your </h2>
                        <h2>Journey</h2>
                        <h3>Beings</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
