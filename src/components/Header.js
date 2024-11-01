import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <nav className="bg-black p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-yellow-400 font-bold text-lg">Phat's Portfolio</div>
                <ul className="flex space-x-6">
                    <li>
                        <Link 
                            to="/" 
                            className={`text-yellow-400 hover:text-yellow-300 transition duration-200 ${location.pathname === '/' ? 'font-bold' : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/portfolio" 
                            className={`text-yellow-400 hover:text-yellow-300 transition duration-200 ${location.pathname === '/portfolio' ? 'font-bold' : ''}`}
                        >
                            My Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={`text-yellow-400 hover:text-yellow-300 transition duration-200 ${location.pathname === '/about' ? 'font-bold' : ''}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={`text-yellow-400 hover:text-yellow-300 transition duration-200 ${location.pathname === '/contact' ? 'font-bold' : ''}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
