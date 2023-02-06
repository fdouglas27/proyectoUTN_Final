import React from 'react';
import '../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div  className='holder'>
                <img src="./img/logos/Logo.jpeg" alt="..." />
                <h1>Baby Travel</h1>
            </div>
        </header>
    );
}

export default Header;