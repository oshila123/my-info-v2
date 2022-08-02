import React, { Fragment } from 'react'
import * as moment from 'moment'
import './About.scss';

// import Typical from 'react-typical'
// import Clock from 'react-clock';

const About = () => {

    // const [value, setValue] = useState(new Date());

    // useEffect(() => {
    //     const interval = setInterval(
    //         () => setValue(new Date()),
    //         1000
    //     );


    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, []);

    const bday = '1993-06-03'
    const year = moment().format('YYYY') - moment(bday).format('YYYY')

    return (
        <Fragment>

            <div className="about parallax">
                <div className="container  pt-5 pb-5">
                    <div className="row">
                        <div className="col-12">
                            <h4>About Me </h4>
                        </div>
                        <div className="col-12">

                            {/* <Typical
                                steps={['', 1000, 'Welcome!', 1000]}
                                loop={Infinity} // amount / times
                                wrapper="p"
                            />

                            <Clock value={value} /> */}

                            <div className="text-justify">
                                Hi, I am Oshila Gunerathne, {year} years old. Over 2 years of software development experience. Currently working on a Digital agency called
                                    <a href="https://eightdigitz.com" className="text-decoration-none university" target="_blank" rel="noopener noreferrer"> Media Box (Pvt) Ltd </a>
                                    also know as the
                                    <a href="https://eightdigitz.com" className="text-decoration-none university" target="_blank" rel="noopener noreferrer"> Eight Digitz </a>
                                as their Frontend developer.
                            </div>
                            <div className="mt-3">
                                BSc. (Hons) in Computer Science Graduated from <a href="https://www.ucd.ie/" className="text-decoration-none university" target="_blank" rel="noopener noreferrer">University College Dublin, Ireland </a>
                                    with Second Class Honours of 2.98 GPA.
                            </div>

                            {/* <div>
                                <a href="https://drive.google.com/drive/folders/1-2XYdL7ERefi3JLHPH5RR5QdwntO7B_E?usp=sharing">Download</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
