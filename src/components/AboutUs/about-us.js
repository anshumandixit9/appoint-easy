import React, { useCallback } from 'react';
import "./AboutUs.css";
function Aboutus()
{
    return (
    <div>
        <section className = "py-4 bg-info">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 my-auto'>
                        <h4> 
                            About Us
                        </h4>
                    </div>
                
                </div>
            </div>
        </section>
        <section className='section border-bottom'>
            <div className = "container">
                <h5 className = "main-heading text-center">Our Company</h5>
                <div className = "underline mx-auto"></div>
                <p>
                AppointEasy is revolutionizing healthcare by enabling consumers to
                find the best doctors, book instant appointments, 
                consultations, and make better, more informed health 
                decisions
                </p>
            </div>
        </section>

        <section className='section bg-c-light border-top'>
            <div className = "container">
                <div className='row'>
                    <div className='col-md-12 mb-4 text-center'>
                        <h3 className = "main-heading">Vision, Mission and Values</h3>
                        <div className = "underline mx-auto">
                        </div>
                    </div>
                <div className='row'>
                        <div className='col-md-4 text-center'>
                            <h6>Our Vision</h6>
                            <p>
                                #DoGreat is our motto and is the hallmark of a true appointeasian.
                                It manifests the intrinsic motivation and passion in each 
                                appointeasian to strive for excellence every time.
                            </p>   
                        </div>
                        <div className='col-md-4 text-center'>
                            <h6>Our Mission</h6>
                            <p>
                                #DoGreat is our motto and is the hallmark of a true appointeasian.
                                It manifests the intrinsic motivation and passion in each 
                                appointeasian to strive for excellence every time.
                            </p>   
                        </div> 
                        <div className='col-md-4 text-center'>
                            <h6>Our Values</h6>
                            <p>
                                #DoGreat is our motto and is the hallmark of a true appointeasian.
                                It manifests the intrinsic motivation and passion in each 
                                appointeasian to strive for excellence every time.
                            </p>   
                        </div>     
                    </div>    
                </div>
            </div>    
        </section>
    </div>
    );
};

export default Aboutus;