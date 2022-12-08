import React, { useContext } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Signup2 = () => {
    const { info } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const phone = event.target.phone.value
        const email = event.target.email.value

        info.phone = phone;
        info.email = email
        console.log(info)
        navigate('/sign3')
    }
    console.log(info)
    return (
        <div className='p-4 shadow-xl mt-0 lg:ml-4'>
            <h2 className='text-center text-2xl font-bold '>SignUp Form</h2>
            <form className='p-5' onSubmit={handleSubmit}>
                <input type="text" placeholder="+880" name='phone' className="input border-0 border-b-2 rounded-none border-indigo-500 w-full my-8" required />
                <input type="text" placeholder="Type Email Address" name='email' className="input border-0 border-b-2 rounded-none border-indigo-500 w-full mb-4 " required />
                <button type='submit' className='btn bg-blue-700 lg:mt-7 px-8 flex text-center lg:ml-36 py-0 rounded-full lg:mb-24 lg:mt-28'>Next Step <span className='ml-2'><FaArrowRight /></span></button>

            </form >
            <div className='flex justify-between px-4'>
                <div className='flex'>
                    <p className='mt-1 mr-1'><FaArrowLeft /></p>
                    <p className='text-primary'><Link to={'/'}> Back</Link></p>
                </div>
                <p className=' mb-4'>Already have an account? <span className='text-primary font-semibold'><Link to={'/login'}>LOGIN HERE</Link></span></p>
            </div>
        </div>
    );
};

export default Signup2;