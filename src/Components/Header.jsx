import React from 'react';
import '../Styles/Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='Header'>
            <div className='logo'>
                <Link to={'/'}>
                IFUDOR1A
                </Link>
            </div>
            <div className='login'>
                <Link to='/auth'>Login</Link>
            </div>
        </div>
    );
};

export default Header;