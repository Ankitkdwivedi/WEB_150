import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Card({ item }) {
    const navigate = useNavigate();
    const handleSubmit=async()=>{
        console.log('thisis id',item._id);
        const response=await axios.get(`http://localhost:8080/${item._id}`);
        navigate('/');

    }
    return (
        <div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={'/'}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Type: {item.type}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Colour: {item.color}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Brand: {item.brand}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Material: {item.material}</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Price: ${item.price}</h5>

                <button onClick={handleSubmit} type='submit' className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-20">Delete</button>
                <Link to={`/show`} className=" ml-10 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-20">Show</Link>

            </div>

        </div>
    )
}

export default Card