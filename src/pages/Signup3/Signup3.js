import React, { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const Signup3 = () => {
    const { info } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const password = event.target.password.value
        info.password = password;

        fetch('https://nexis-server-rho.vercel.app/user', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {

                jwt(info.email)
            })
            .catch(e => console.log(e))

    }
    const jwt = (email) => {
        console.log(email)
        fetch(`https://nexis-server-rho.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('NexisToken', data.token)
                toast("Register successfull!")
                navigate('/login')

            })
            .catch(error => console.error(error))
    }
    console.log(info)
    return (
        <div className='p-4 shadow-xl mt-0 lg:ml-4 w-full'>
            <h2 className='text-center text-2xl font-bold '>SignUp Form</h2>
            <form className='p-5 on' onSubmit={handleSubmit}>
                <input type="text" name='password' placeholder="Write Password" minLength="8" className=" w-[27rem] input border-0 border-b-2 rounded-none border-indigo-500  my-2" required />
                <label className="label">
                    <span className="label-text-alt">Your password must be 8 character</span>

                </label>
                <button type='submit' className='btn bg-blue-700 lg:mt-7 px-8 flex text-center lg:ml-36 py-0 rounded-full lg:mb-24 lg:mt-28'>Sign Up </button>

            </form>
            <div className='flex justify-between px-4 '>
                <div className='flex'>
                    <p className='mt-1 mr-1'><FaArrowLeft /></p>
                    <p className='text-primary'><Link to={'/sign2'}> Back</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Signup3;