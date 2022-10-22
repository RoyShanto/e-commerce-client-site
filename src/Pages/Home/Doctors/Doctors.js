import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
const Doctors = () => {
    const [doctors, allDoctors] = useState([]);
    // useEffect(()=>{
    //     fetch('./Doctors.json')
    //         .then(req => req.json())
    //         .then(data => allDoctors(data))
    // },[])
    // console.log(doctors);
    return (
        <div className='container'>
            <h1>All Doctors</h1>
            <div className='row'>
                {
                    doctors.map(a => <Doctor data={a} key={a.id}/>)
                }
            </div>
        </div>
    );
};

export default Doctors;