import React from 'react';

const Doctor = (props) => {
    console.log(props.data);
    const {userId, id, name, info} = props.data;
    return (
        <div className='col-md-4'>
            <div className="card text-dark bg-light mb-3">
                <img src="./images/doctor.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{"Dr. "+name}</h5>
                    <p className="card-text">{info}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Doctor;