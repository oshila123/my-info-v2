import React from 'react';
import * as moment from 'moment';
import Timer from '../Timer/Timer';
import './Footer.scss';

const Year = () => {
    return (
        moment().format("YYYY")
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <div className="sub-footer">
                <div className="container">
                    <h4 className="text-lg-right pt-2"> <small> <Timer />  </small></h4>
                </div>
            </div>
            <div className="main-footer">
                <div className="container">
                    <div className="row justify-content-between footer">
                        <div className="col-sm-12 col-md-8">
                            <h4 >Oshila Gunerathne. <Year /> </h4>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <h4 className="float-md-right">
                                <a href="https://www.linkedin.com/in/oshila123" className="text-decoration-none" target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin-square mr-2" aria-hidden="true"></i></a>
                                {/* <i className="fa fa-linkedin " aria-hidden="true"></i> */}
                                {/* <i className="fa fa-twitter " aria-hidden="true"></i> */}
                                <a href="https://twitter.com/oshila123" className="text-decoration-none" target="_blank" rel="noopener noreferrer"> <i className="fa fa-twitter-square " aria-hidden="true"></i></a>
                            </h4>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer;
