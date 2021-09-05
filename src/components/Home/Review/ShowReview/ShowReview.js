import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowReview = (props) => {
  const { company, name, details, } = props.abc;

  return (
      <div className="col-md-4 mt-5">
        <div className="shadow bg-light rounded p-5">
          <Card.Body className='text-center'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              ${company}
            </Card.Text>
            <Card.Text>
              {details}
            </Card.Text>
          </Card.Body>
        </div>
      </div>


   

  );
};

export default ShowReview;