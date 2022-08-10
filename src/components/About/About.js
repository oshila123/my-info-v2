import React, { Fragment } from 'react'
import * as moment from 'moment'
import './About.scss';

const About = () => {
    const bday = '1993-06-03'
    const year = moment().format('YYYY') - moment(bday).format('YYYY')

    const expNow = moment().format('YYYY') - moment('2018').format('YYYY')

    return (
        <Fragment>
            <div className="about parallax">
                <div className="container  pt-5 pb-5">
                    <div className="row">
                        <div className="col-12">
                            <h4>About Me </h4>
                        </div>
                        <div className="col-12">
                            <div className="text-justify">
                                Hi, I am Oshila Gunerathne, {year} years old. 
                                Over {expNow} years of software development experience including designing and developing web applications with ReactJS, Angular, CSS etc...
                                Currently working on a company called <a href="https://ovinway.com/#/home" className="text-decoration-none university" target="_blank" rel="noopener noreferrer"> Ovinway (Pvt) Ltd </a>
                                as a Software Engineer.
                            </div>
                            <div className="mt-3">
                                BSc. (Hons) in Computer Science Graduated from <a href="https://www.ucd.ie/" className="text-decoration-none university" target="_blank" rel="noopener noreferrer">University College Dublin, Ireland </a>
                                    with Second Class Honours of 2.98 GPA.
                            </div>
                            <div className="mt-3">
                            Experience in working under the mission and time-critical projects following all phases of SCRUM and Agile.
                            </div>
                            <div className="mt-3">
                            Experience in team management, leading, code reviewing and mentoring individuals to maximize productivity while forming cohesive team environments with excellent communication skills.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
