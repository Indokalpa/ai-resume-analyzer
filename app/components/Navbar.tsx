import React from 'react'
import {Link} from 'react-router'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-l font-bold text-gradient">ai-resume-analyzer</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                upload Resume
            </Link>
        </nav>
    )
}
export default Navbar
