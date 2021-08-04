import React from 'react'
import NavBar from './NavBar';

import '../styles/global.css';



const Layout = ({ children }) => {
    return (
        <>
            <div className="layout">
                <NavBar />
            </div>

            <div className="content">
                { children }
            </div>
            <footer>
                <p>Copyright &copy; 2021 Web Warrior</p>
            </footer>
        </>
    );
}
 
export default Layout;
