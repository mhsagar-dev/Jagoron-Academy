import React from 'react';
import Header from './Header/Header';
import Review from './Review/Review';
import Services from './Services/Services';



const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;