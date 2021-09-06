import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoggedContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedContext);
    const [isAdmin, setIsAdmin] = useState(false);
    console.log(isAdmin);

    useEffect(() => {
        fetch('https://salty-gorge-93542.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {setIsAdmin(data)
            console.log(data);})


    }, [loggedInUser])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled"> {
                isAdmin ?
    
                    <div>
                        <li>
                            <Link to="/dashboard/addServices" className="text-white">
                                <span>Add Course</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addAdmin" className="text-white">
                                <span>Add Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/order/:id" className="text-white">
                                <span>Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addReview" className="text-white">
                                <span>Your Review</span>
                            </Link>
                        </li>
                    </div>
                    :
                    <div>
                        <li>
                            <Link to="/dashboard/order/:id" className="text-white">
                                <span>Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addReview" className="text-white">
                                <span>Your Review</span>
                            </Link>
                        </li>
                    </div>

            }
            </ul>

            <div>
                <Link to="/" className="text-white"> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;