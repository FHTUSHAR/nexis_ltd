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
        console.log(login)
        fetch('http://localhost:5000/loginuser', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast("Login successfull!")
                    navigate('/home')
                }
            })
            .catch(e => console.log(e))



    }
    return (
        <div className='p-4 shadow-xl mt-0 lg:ml-4'>
            <ToastContainer />
            <h2 className='text-center text-2xl font-bold '>Login</h2>
            <form className='p-5' onSubmit={handleSubmit}>
                <input type="text" placeholder="Type Email" name='lemail' className="input border-0 border-b-2 rounded-none border-indigo-500 w-full my-8" required />
                <input type="text" placeholder="Type Password" name='lpassword' className="input border-0 border-b-2 rounded-none border-indigo-500 w-full mb-4 " required />
                <button type='submit' className='btn btn-primary lg:mt-7 px-8 flex text-center lg:ml-36 py-0 rounded-full lg:mb-24 lg:mt-28'>Sign In</button>

            </form>
            <p className='text-center mb-4'> Have an account? <span className='text-primary font-semibold'><Link to={'/'}>Sign Up HERE</Link></span></p>
        </div>
    );
};

export default Login;