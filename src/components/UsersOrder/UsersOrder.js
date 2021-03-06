import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import { LoggedContext } from '../../App';


const UsersOrder = () => {
    const { id } = useParams();
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(LoggedContext);
    const [order, setOrder] = useState([]);
    const onSubmit = data => {
        const orderData = {
            name: data.userName,
            productName: order.name,
            price: order.price,
            email: data.userEmail
        };

        console.log(data);
        const url = `https://salty-gorge-93542.herokuapp.com/addOrder`;
        console.log(orderData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your Order Successfully Submited');
                history.replace('/home')
            })
    };

    useEffect(() => {
        fetch(`https://salty-gorge-93542.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    return (
        <div className="container">
            <h2 className='text-center mt-3'>Confirm Your Order</h2>
            <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>

                <input className="form-control rounded-pill" value={loggedInUser.name} {...register("userName")} />
                <br />
                <input className="form-control rounded-pill" value={loggedInUser.email} {...register("userEmail")} />
                <br />
                <input className="form-control rounded-pill" value={order.name} {...register("pdName")} />
                <br />
                <input className="form-control rounded-pill" value={order.price} {...register("pdPrice")} />
                <br />
                <input className="form-control rounded-pill btn btn-primary" value='Confirm' required type="submit" />
            </form>
        </div>
    );
};

export default UsersOrder;