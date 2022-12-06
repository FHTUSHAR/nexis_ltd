import React, { useContext, useDebugValue, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Signup2 from '../Signup2/Signup2';

const Signup1 = () => {
    const { info, d, ud, setUd } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const fname = event.target.firstname.value
        const lname = event.target.lastname.value

        info.fname = fname;
        info.lname = lname
        console.log(info)
        navigate('/sign2')
    }


    return (
        <div className='p-4 shadow-xl mt-0 lg:ml-4'>
            <h2 className='text-center text-2xl font-bold '>SignUp Form</h2>
            <form className='p-5' onSubmit={handleSubmit}>
                <input type="text" placeholder="Type First Name" name='firstname' className="input border-0 border-b-2 rounded-none border-indigo-500 w-full my-8" required />
                <input type="text" placeholder="Type Last Name" name='lastname' className="input border-0 border-b-2 rounded-none border-indigo-500 w-full mb-4 " required />
                <button type='submit' className='btn btn-primary lg:mt-7 px-8 flex text-center lg:ml-36 py-0 rounded-full lg:mb-24 lg:mt-28'>Next Step <span className='ml-2'><FaArrowRight /></span></button>

            </form>
            <p className='text-center mb-4'>Already have an account? <span className='text-primary font-semibold'><Link to={'/login'}>LOGIN HERE</Link></span></p>
        </div>
    );
};

export default Signup1;