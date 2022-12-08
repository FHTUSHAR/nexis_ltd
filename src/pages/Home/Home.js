import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import img from '../../images/nav.png'

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://nexis-server-rho.vercel.app/loginuser', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('NexisToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
            .catch(e => console.log(e))
    }, [])
    return (
        <div className="overflow-x-auto">
            <div className='mt-4 lg:px-6 flex justify-between'><img src={img} alt="" /> <p className='text-primary font-semibold'><Link to={'/login'}>LogOut</Link></p></div>
            <h2 className='text-center text-4xl font-semibold mb-3'><span className='bg-blue-400 px-4 py-1 rounded-xl text-white'>Attendance Information</span></h2>
            <table className="table w-full px-6 ">

                <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Employee Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.date}</td>
                            <td>{user.name}</td>
                            <td>{user?.status === 'true' ? <p>Present</p> : <p><span className='border border-red-600 rounded-full px-3 '>Absent</span></p>}</td>
                        </tr>)

                    }


                </tbody>
            </table>
        </div>
    );
};

export default Home;