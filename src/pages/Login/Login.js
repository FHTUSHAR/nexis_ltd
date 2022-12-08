import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.lemail.value
        const password = event.target.lpassword.value
        const date = new Date().toLocaleString().split(',')[0]
        const login = {
            email,
            password,
            status: 'true',
            date
        }


        fetch('https://nexis-server-rho.vercel.app/loginuser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Login successfull!")
                jwt(data.email)

            })
            .catch(e => console.log(e))



    }
    const jwt = (email) => {
        console.log(email)
        fetch(`https://nexis-server-rho.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('NexisToken', data.token)

                navigate('/home')

            })
            .catch(error => console.error(error))
    }
    return (
        <div className='p-4 shadow-xl mt-0 lg:ml-4'>
            <ToastContainer />
            <h2 className='text-center text-2xl font-bold '>Login Form</h2>
            <form className='p-5' onSubmit={handleSubmit}>
                <input type="text" placeholder="Type Email" name='lemail' className="input border-0 border-b-2 rounded-none border-indigo-500 w-full my-8" required />
                <input type="text" placeholder="Type Password" name='lpassword' className="input border-0 border-b-2 rounded-none border-indigo-500 w-full mb-4 " required />
                <button type='submit' className='btn btn-primary lg:mt-7 px-8 flex text-center lg:ml-36 py-0 rounded-full lg:mb-24 lg:mt-28'>Log In</button>

            </form>
            <p className='text-center mb-4'> Have an account? <span className='text-primary font-semibold'><Link to={'/sign1'}>SIGNUP HERE</Link></span></p>
        </div>
    );
};

export default Login;