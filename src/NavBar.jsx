import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex justify-between cursor-pointer'>
                <Link to='/react-memo'>React Memo</Link>
                <Link to='/memo'>Memo</Link>
                <Link to='/callback'>Callback</Link>
            </div>
        </div>
    )
}

export default NavBar