import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className='flex justify-between h-14 text-center align-middle'>
            <div>Logo</div>
            <div className='flex list-none fl'>
                <li>Investor Relations</li>
                <li>Add Restaurent</li>
                <li>Login</li>
                <li>SignUp</li>
            </div>
        </div>
        <div><img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" className='w-full h-100' alt="" role="presentation"/></div>
    </div>
  )
}

export default Nav