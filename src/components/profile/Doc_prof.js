import React from 'react';
import './doc.css'

const Doc_prof = () => {
    return (
        <>
        
        <div classNameNameName="App">
           
                    <div className="student-profile py-4">
            <div className="container">
                <div className="row">
                <div className="col-lg-4">
                    <div className="card shadow-sm">
                    <div className="card-header bg-transparent text-center">
                        <img className="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp"/>
                        <h3>Dr. Nimit Shrestha</h3>
                        <p>Surgeon , cardiologist</p>
                    </div>
                    <div className="card-body">
                        <p className="mb-0"><strong className="pr-1">Experience :</strong>15 Years</p>
                        <p className="mb-0"><strong className="pr-1">Language :</strong>English , Hindi</p>
                        <p className="mb-0"><strong className="pr-1">Education :</strong>MBBS , MD</p>
                    </div>

                    </div>
                    
                </div>
                <div className="col-lg-8">
                    <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Doctor Information</h3>
                    </div>
                    <div className="card-body pt-0">
                        <table className="table table-bordered">
                        <tr>
                            <th width="30%">Mobile No. </th>
                            <td width="2%">:</td>
                            <td>012345678</td>
                        </tr>
                        <tr>
                            <th width="30%">Email :	</th>
                            <td width="2%">:</td>
                            <td> macy@mail.com</td>
                        </tr>
                        <tr>
                            <th width="30%">Speciality</th>
                            <td width="2%">:</td>
                            <td> Dentistry , Surgeon , Orthopadic</td>
                        </tr>
                        <tr>
                            <th width="30%">website</th>
                            <td width="2%">:</td>
                            <td>www.Nimitshreastha</td>
                        </tr>
                        <tr>
                            <th width="30%">Address :</th>
                            <td width="2%">:</td>
                            <td>Maa ki Choooooooo , Gali number 12</td>
                        </tr>
                        </table>
                    </div>
                    </div>
                    <div style={{height: "26px"}}></div>
                    <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                    </div>
                    <div className="card-body pt-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

    </>

    );
};

export default Doc_prof;