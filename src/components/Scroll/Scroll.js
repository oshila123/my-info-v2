import React from 'react'
import ScrollDown from '../../assets/img/scroll-down.png'
import './Scroll.scss';

const Scroll = () => {
    return (
        <div className="fullscreen">
            <div className="image">
                <img src="../../assets/img/scroll-down.png" alt="" />
            </div>
            <div className="text">
                Scroll down to enter the site please
            </div>
        </div>
    )
}

export default Scroll
