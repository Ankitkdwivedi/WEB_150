import React, { useState } from 'react'
import { Link, } from 'react-router-dom'
import Nav from './Nav'

function Show() {

    return (
        <div>
            <Nav/> 
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={'/'}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Type: Gold</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Colour: Green</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Brand: Nike</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Material: Iron</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Price: $12</h5>

            </div>

        </div>
    )
}

export default Show