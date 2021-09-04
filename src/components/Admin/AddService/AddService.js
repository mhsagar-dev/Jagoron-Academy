import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';


const AddService = () => {
  const history = useHistory()
  const { register, handleSubmit, formState: { } } = useForm();
  const [imgURL, setImgURL] = useState(null);
  const onSubmit = data => {
    const serviceData = {
      name: data.name,
      price: data.price,
      description: data.details,
      imgURL: imgURL
    };

    console.log(data);
    const url = `http://localhost:5000/addService`;
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
        alert('Product Added')
        history.replace('/home')
      })
  };


  const handleImgUpload = event => {
    console.log(event.target.files[0]);
    const imgData = new FormData();
    imgData.set('key', '77da35cf31aaabe5dc1b1cc146b2d1b2');
    imgData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imgData)
      .then(function (response) {
        setImgURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    
    <div className="container">
      <div>
      <h2>Add Courses</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input className="form-control" required placeholder="Course Name" {...register("name")} />
        <br />
        <input className="form-control" required placeholder="Price" {...register("price")} />
        <br />
        <input type='text' className="form-control" required placeholder="description" {...register("details")} />
        <br />
        <input className="form-control" name="exampleRequired" type='file' onChange={handleImgUpload} />
        <br />
        <input className="form-control btn btn-primary" required type="submit" />
      </form>
      </div>
    </div>
  );
};

export default AddService;