import React from'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
function Footer()
{
    return(
    <div className='footer '>
        <div className='container '>
            <div className='row '>
                <div className='col-md-4 style-row'>
                    <h6 className='head-style'>Company Information</h6>
                    <hr/>
                    <p className='text-white'>
                        AppointEasy is an mhealth platform that 
                        connects patients with healthcare providers 
                        through booking appointments, check-ups, 
                        and consultations.
                    </p>
                </div>
                <div className='col-md-4 style-row'>
                    <h6 className='head-style'>Quick Links</h6>
                    <hr/>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/AboutUs">About Us</Link></div>
                    <div><Link to="/Login">Login</Link></div>
                </div>
                <div className='col-md-4 style-row'>
                    <h6 className='head-style'>Contact Information</h6>
                    <hr/>
                    <div className='row'>ABES Engineering College, Ghaziabad-201009</div>
                    <div className='row'>+91 7007585761</div>
                    <div className='row'>abhay.19b111011@abes.ac.in</div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Footer;