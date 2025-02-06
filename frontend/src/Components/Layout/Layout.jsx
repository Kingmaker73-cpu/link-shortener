import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'; 
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../MobileNavbar/MobileNavbar'; 
import styles from './Layout.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [isOpen, setIsOpen] = useState(false);
    const [formOn, setFormOn] = useState(false);
    const { isAuthenticated } = useSelector(state => state.auth)


    return (
        <>
        
            {isMobile && isAuthenticated ? (
                <MobileNavbar 
                    isOpen={isOpen} 
                    setIsOpen={setIsOpen} 
                    formOn={formOn} 
                    setFormOn={setFormOn} 
                    search={search}
                    setSearch={setSearch}
                />
            ) : (
                <>
                    <Sidebar />
                    <Navbar search={search} setSearch={setSearch} />
                </>
            )}
        </>
    );
};

export default Layout;