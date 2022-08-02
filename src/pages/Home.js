import React, { Fragment } from 'react';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Footer from '../shared/Footer/Footer';
import Loader from '../shared/Loader/Loader';
import Technology from '../components/Technology/Technology';
import "./Home.scss";
import { useEffect } from 'react';
import { useState } from 'react';
import Projects from '../components/Projects/Projects';

const Home = () => {

    const [loading, SetLoading] = useState(true)

    useEffect(() => {
        SetLoading(false)
    }, [])

    return (
        <Fragment >
            {
                loading
                    ?
                    <Loader />
                    :
                    <Fragment >
                        <CarouselComponent />

                        <About />

                        <Technology />

                        <Projects />

                        <Work />

                        <Footer />

                    </Fragment>
            }
        </Fragment>
    )
}

export default Home
