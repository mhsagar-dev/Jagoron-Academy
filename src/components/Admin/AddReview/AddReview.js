import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';


const AddReview = () => {
  const history = useHistory()
  const { register, handleSubmit, formState: { } } = useForm();
  const [imgURL, setImgURL] = useState(null);
  const onSubmit = data => {
    const serviceData = {
      name: data.name,
      company: data.company,
      details: data.details
    };

    console.log(data);
    const url = `https://salty-gorge-93542.herokuapp.com/addReview`;
    console.log(serviceData);

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
      .then(res => res.json())
      .then(data => {
        alert('Review Added')
        history.replace('/home')
      })
  };



  return (
    
    <section>
      <Row>
        <Col md={2}>
        <Sidebar></Sidebar>
        </Col>
      <Col className='container' md={8}>
      <h2>Your Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input className="form-control" required placeholder="Your Name" {...register("name")} />
        <br />
        <input className="form-control" required placeholder="Comany Name" {...register("company")} />
        <br />
        <input type='text' className="form-control" required placeholder="description" {...register("details")} />
        <br />
        <input className="form-control btn btn-primary" required type="submit" />
      </form>
      </Col>
      </Row>
    </section>
  );
};

export default AddReview;