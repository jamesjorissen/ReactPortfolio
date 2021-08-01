import React from "react";
import image1 from "../healthsearch.jpg";
import image2 from "../weather.jpg";
import image3 from "../notetaker.jpg";
import image4 from "../schedule.jpg";
import image5 from "../mindset.jpg";
import image6 from "../budget.jpg";



function Projects() {
    return (
        <div className='container' style={{ minHeight: "75vh", marginTop: "5%" }}>
            <div className='row'>
                <div className='col'>
                    <div className='card-project3'>

                        <h4>Mindset</h4>
                        <img src={image5} alt="mindset" className="small" style={{ minHeight: "75p", marginTop: "5%", width: "90%" }}></img>
                        <a href="https://github.com/jlcalderon/project-3" rel="noreferrer">

                            Mindset Repo
                        </a>

                        <br></br>
                        <a href="https://github.com/jlcalderon/project-3" rel="noreferrer">
                            Mindset Live Link!
                        </a>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='col'>
                    <div className='card-notes'>
                        <h4>Taking Notes</h4>
                        <img src={image3} alt="takingnotes" className="small" style={{ minHeight: "75p", marginTop: "5%", width: "90%" }}></img>
                        <a href="https://github.com/jamesjorissen/TakingNotes" rel="noreferrer">
                            Taking Notes Repo
                        </a>
                        <br></br>
                        <a href="https://blooming-lake-90672.herokuapp.com/" rel="noreferrer">
                            Taking Notes Live Link!

                        </a>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='col'>
                    <div className='card-health'>
                        <h4>Health Search</h4>
                        <img src={image1} alt="healthsearch" className="small" style={{ minHeight: "75p", marginTop: "5%", width: "90%" }}></img>
                        <a href="https://github.com/jamesjorissen/healthsearch" rel="noreferrer">
                            Health Search Repo
                        </a>
                        <br></br>
                        <a href="https://jamesjorissen.github.io/healthsearch/" rel="noreferrer">
                            Health Search Live Link!

                        </a>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='row'>
                <div className='col'>
                    <div className='card-weather'>
                        <img src={image2} alt="weather" className="small" style={{ minHeight: "75p", marginTop: "5%", width: "90%" }}></img>
                        <h4>What's the Weather?</h4>
                        <a href="https://github.com/jamesjorissen/WhatstheWeather" rel="noreferrer">
                            What's the Weather Repo
                        </a>
                        <br></br>
                        <a href="https://blooming-lake-90672.herokuapp.com/" rel="noreferrer">
                            What's the Weather Live Link!

                        </a>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='col'>
                    <div className='card-budget'>
                        <img src={image6} alt="budget" className="small" style={{ minHeight: "75p", marginTop: "5%", width: "90%" }}></img>
                        <h4>On Again, Off Again Budget</h4>
                        <a href="https://github.com/jamesjorissen/onagainoffagainbudget" rel="noreferrer">
                            On Again, Off Again Budget Repo
                        </a>
                        <br></br>
                        <a href="https://floating-temple-74034.herokuapp.com/" rel="noreferrer">
                            On Again, Off Again Budget Repo Live Link!

                        </a>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='col'>
                    <div className='card-schedule'>
                        <h4>Schedule Me Timbers</h4>
                        <img src={image4} alt="schedule" className="small" style={{ minHeight: "75p", marginTop: "5%", width: "90%" }}></img>
                        <a href="https://github.com/jamesjorissen/schedule-me-timbers" rel="noreferrer">
                            Schedule Me Timbers Repo
                        </a>
                        <br></br>
                        <a href="https://jamesjorissen.github.io/schedule-me-timbers/" rel="noreferrer">
                            Schedule Me Timbers Live Link!

                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
