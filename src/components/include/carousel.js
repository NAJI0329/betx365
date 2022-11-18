import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import carouselImg1 from "../../assets/img/carousel1.webp"
import carouselImg2 from "../../assets/img/carousel2.webp"
import carouselImg3 from "../../assets/img/carousel3.webp"
import carouselImg4 from "../../assets/img/carousel4.webp"


const CarouselCom =()=> {
    return (
        <Carousel fade>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src={carouselImg1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src={carouselImg2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src={carouselImg3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src={carouselImg4}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
      );
    }

export default CarouselCom;