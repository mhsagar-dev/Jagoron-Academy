import React from 'react';
import mainPic from '../../../images/banner1.png';


const MainContent = () => {
    return (
        <div className='container '>
            <main style={{ height: '540px' }} className="row d-flex align-items-center">
                <div className="col-md-5 offset-md-1">
                    <h1>
                        Jagoron Academy
                    </h1>
                    <p className='text-secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fugiat quibusdam numquam temporibus laudantium illum?
                    </p>
                    <button className='btn btn-primary rounded-pill'>Start Your Journey</button>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={mainPic} alt="" />
                </div>
            </main>
        </div>

    );
};

export default MainContent;