import React from 'react';
import { Outlet } from 'react-router-dom';
import sgn from '../../src/images/sgn.png'
import nav from '../images/nav.png'

const Main = () => {
    return (
        <div>

            <div className="hero ">

                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img className=' lg:mt-14' src={nav} alt="" />
                        <img src={sgn} className=" " />
                    </div>
                    <div className='mt-4'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;