import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import AuthContext from your AuthProvider
import { AuthContext } from '../AuthProvider';
import axios from 'axios';

function Nav() {
    const {logout}=useContext(AuthContext); 
    const authData=JSON.parse(localStorage.getItem('user'));
    const handleLogOut=async function(){
      await axios.post('http://localhost:8080/logout');
    logout();

    }
    return (
        <div>
            <div className='flex justify-between flex-wrap items-center border border-x-fuchsia-500 h-20 bg-pink-100 '>
                <Link to={'/'} className='ml-10'>Guitar App</Link>
                <div className='flex flex-wrap gap-10'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/new'}>Create New</Link>
                </div>
                {authData ? ( 
                    <>
                        <span className="mr-10">{authData.email}</span> {/* Display user's first name */}
                        <button onClick={handleLogOut} className='mr-10'>Logout</button> {/* Show logout button */}
                    </>
                ) : (
                    <button className='mr-10'><Link to='/login'>Login</Link></button>
                )}
            </div>
        </div>
    );
}

export default Nav;
