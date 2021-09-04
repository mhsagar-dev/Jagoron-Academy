import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowService = (props) => {
  const { _id, name, price, description, imgURL } = props.abc;

  return (
      <div className="col-md-4 mt-5">
        <div className="shadow bg-light rounded p-5">
          <Card.Img className='rounded-pill' variant="top" src={imgURL} height='180px' />
          <Card.Body className='text-center'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              ${price}
            </Card.Text>
            <Card.Text>
              {description}
            </Card.Text>
            <Link className="btn btn-primary">Enroll</Link>
          </Card.Body>
        </div>
      </div>


   

  );
};

export default ShowService;