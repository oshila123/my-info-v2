import React from 'react'
import './Projects.scss';

const Projects = () => {
    return (
        <div className="projects mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>Individual Projects</h4>
                    </div>

                    <div className="col-12">
                        <div className="company mt-5 mb-5">
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    <h3> <a href="https://ozi-tmdb.herokuapp.com/" className="text-decoration-none university" target="_blank" rel="noopener noreferrer">TMDB API Supported Movie Site </a></h3>
                                    <h4>Using ReactJS</h4>
                                    <p>More feautres may apply with the time</p>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <ul>
                                        <li>build the entire app by using
                                            <a href="https://developers.themoviedb.org/3" className="text-decoration-none university" target="_blank" rel="noopener noreferrer">TMDB API. </a>
                                            Within less than 2 weeks by working in my free time.
                                            </li>
                                        <li>Used ReactJS version 17 (latest at the moment) for the project.</li>
                                        <li>More features will includes to the project with the time I have. </li>
                                        <li>Used Bootstrap with SCSS.</li>
                                        <li>Serverside pagination.</li>
                                        <li>Technologies using
                                            <ul>
                                                <li>ReactJS</li>
                                                <li>JavaScript</li>
                                                <li>Bootstrap</li>
                                                <li>SCSS</li>
                                                <li>GIT</li>
                                                <li>REST API calls</li>
                                                <li>HTML5</li>
                                            </ul>
                                        </li>
                                        <li>Issues I found
                                            <ul>
                                                <li>As I am using Heroku free version, they are idling the web app after a certain time frame if it's not in using. So I used a free service to ping the website every few minutes. Anyhow if the site is down there are two incidents can happen.
                                                    <ol>
                                                        <li>
                                                            Gives an error says site is not available or similar error.
                                                        </li>
                                                        <li>
                                                            Please view the Heroku error log.
                                                        </li>
                                                    </ol>

                                                    But neither is true. This happens only because I am using Heroku free version.
                                                   <div> In such case, you just have to refresh the page until Heroku starts the app again.</div>
                                                </li>

                                                <li>TMDB api issues like image loading. ( If the images doesn't appear, it's because of that). In such case, please refresh the site to load the images</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects
