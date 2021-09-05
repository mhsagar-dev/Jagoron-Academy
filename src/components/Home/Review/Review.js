import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ShowReview from './ShowReview/ShowReview';


const Review = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://salty-gorge-93542.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div className="container">
            <h1 className='mt-5 text-center'>Testimonials</h1>
            <div className='row'>
                {
                    service.length === 0 && <Spinner className='container mt-5 text-center' animation="border" />
                }
                {
                    service.map(abc =><ShowReview abc={abc}></ShowReview>)

                }

            </div>
            </div>
        
    );
};

export default Review;