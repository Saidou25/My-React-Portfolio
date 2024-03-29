import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';
// import Parallax from './Parallax';
// import './Header.css';
const pageComponents = { About, Portfolio, Resume, Contact };

const pages = Object.keys(pageComponents);

const Header = () => {

    const [currentPage, setCurrentPage] = useState('Portfolio');


    const renderPage = () => {

        if (currentPage === 'Resume') {

            return <Resume />
        }
        if (currentPage === 'Contact') {

            return <Contact />
        }
        if (currentPage === 'About') {

            return <About />;
        }
        // if (currentPage === 'Parallax') {

        //     return <Parallax />;
        // }
      
        return <Portfolio />;

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} pages={pages} />
            {renderPage()}
        </div>
    )
};

export default Header;