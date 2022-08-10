import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import * as moment from 'moment'

import reactImage from '../../assets/img/react.jpg';
import angularImage from '../../assets/img/angular.jpg';
import macImage from '../../assets/img/mac.jpg';
import './CarouselComponent.scss';

const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const expNow = moment().format('YYYY') - moment('2018').format('YYYY')

    return (
        <div className="slider">
            <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
                <Carousel.Item>
                    <img
                        className="w-100 img-fluid"
                        src={reactImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="content-overlay-topic mb-2">ReactJS</h3>
                        <p className="content-overlay">Collaborate with several commercial ReactJS projects</p>
                        <p className="content-overlay d-none d-md-block">BYJU's, WhiteHatJr products</p>
                        <p className="content-overlay d-none d-md-block">Online Airticket and Hotel booking search engines</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 img-fluid"
                        src={angularImage}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="content-overlay-topic mb-2">Angular</h3>
                        <p className="content-overlay">Collaborate with several commercial Angular projects</p>
                        <p className="content-overlay d-none d-md-block">getepic product</p>
                        <p className="content-overlay d-none d-md-block">Online Airticket and Hotel booking search engines</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 img-fluid"
                        src={macImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="content-overlay-topic mb-2">Frontend Developer</h3>
                        <p className="content-overlay d-none d-md-block">Over {expNow} years of industrial experince.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComponent
