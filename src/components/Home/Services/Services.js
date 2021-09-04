import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ShowService from './ShowService/ShowService';


const Services = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div className="container">
            <h1 className='mt-5 text-center'>Choose Yours</h1>
            <div className='row'>
                {
                    service.length === 0 && <Spinner className='container mt-5 text-center' animation="border" />
                }
                {
                    service.map(abc =><ShowService abc={abc}></ShowService>)

                }

            </div>
            </div>
        
    );
};

export default Services;