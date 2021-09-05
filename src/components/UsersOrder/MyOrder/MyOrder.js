import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { LoggedContext } from '../../../App';

const MyOrder = () => {

    const [loggedInUser, setLoggedInUser] = useContext(LoggedContext);
    const [myorder, setMyorder] = useState([]);

    useEffect(() => {
        fetch(`https://salty-gorge-93542.herokuapp.com/orderlist/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setMyorder(data))
    }, [])
    return (
        <div className='container'>

            <h4 className='text-center mt-3'>
                Hey <span className='text-danger'> {loggedInUser.name}</span>, This is your Order List
            </h4>
            <table className='table table-bordered mt-3'>
                <thead>
                    <tr className='text-center table-light table-responsive'>
                        <th scope='col'>Course Name</th>
                        <th scope='col'>Price</th>
                    </tr>
                </thead>
                {
                    myorder.length === 0 && <Spinner className='ms-5 ' animation="border" />
                }

                <tbody>

                    {myorder.map((order) => (
                        <tr>
                            <td>{order.productName}</td>
                            <td>BDT {order.price}/-</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;