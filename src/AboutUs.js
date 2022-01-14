import React from 'react';

// styling
import './AboutUs.css';

const AboutUs = () => {


    return (
        <>
        
        <div className='container logo-image'>
            
        </div>
        <div className="content container">
            <div className='center-align'></div>
            <div>
                
                    Welcome to our website Med Docs! 
                
            </div>

            
            <div className='left-align '>
                <br></br>
                         - A website reducing the physical distancing between patients and doctors by helping 
                them connect virtually in this pandemic.
                <br></br>
                <br></br>
                <b> Features of our website: </b>
                <ul>
                    <li> Patients can book an appointment with the doctors </li>
                    <li> Patients can upload and view their previous documents</li>
                    <li> Doctors can register on our website and help patients by virtually connecting with them</li>
                </ul>
            </div>
            
        </div>
        </>
    );
}

export default AboutUs;