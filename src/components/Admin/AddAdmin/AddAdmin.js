import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Row } from 'react-bootstrap';



const AddAdmin = () => {
  const history = useHistory()
  const { register, handleSubmit, formState: { } } = useForm();
 
  const onSubmit = data => {
    const adminData = {
      email: data.email
    };

    console.log(data);
    const url = `https://salty-gorge-93542.herokuapp.com/addAdmin`;
    console.log(adminData);

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(adminData)
    })
      .then(res => res.json())
      .then(data => {
        alert('Admin Added')
      })
  };



  return (
    
    <section>
         <Row>
        <Col md={2}>
            <Sidebar></Sidebar>
        </Col>
      <Col className='container'md={8}>
      <h2>Add Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='email' className="form-control" required placeholder="Admin's email" {...register("email")} /> <br />
        <input className="form-control btn btn-primary" required type="submit" />
      </form>
      </Col>
     </Row>
    </section>
  );
};

export default AddAdmin;