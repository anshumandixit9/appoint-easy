import React from 'react';
import './style.css'

const Mystatus = () => {
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
                        <h3>Sachin</h3>
                    </div>
                    <div className="card-body">
                        <p className="mb-0"><strong className="pr-1">Patient ID:</strong>321000001</p>
                        <p className="mb-0"><strong className="pr-1">Ward No:</strong>4</p>
                        <p className="mb-0"><strong className="pr-1">Section:</strong>A</p>
                    </div>

                    </div>
                    
                </div>
                <div className="col-lg-8">
                    <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0"><i className="far fa-clone pr-1"></i>User Information</h3>
                    </div>
                    <div className="card-body pt-0">
                        <table className="table table-bordered">
                        <tr>
                            <th width="30%">Mobile No. </th>
                            <td width="2%">:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th width="30%">Address :	</th>
                            <td width="2%">:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th width="30%">Gender</th>
                            <td width="2%">:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th width="30%">Occupation</th>
                            <td width="2%">:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th width="30%">Blood Group :</th>
                            <td width="2%">:</td>
                            <td></td>
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

export default Mystatus;