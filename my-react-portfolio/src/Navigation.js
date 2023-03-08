import React from 'react';
import './Navigation.css';


function Navigation({ currentPage, handlePageChange, pages }) {

  return (
    // <div className='main-about'>
      <div className='row-top'>
        <div className='col-lg-4 myname'>
          <h1>Saidou Monta</h1>
        </div>
        <div className='col-lg-8 navigation'>
          {/* <div className="navigation"> */}
            {pages.map((page) => (
              <article key={page} className='nav-item'>
                <a
                  href={`#${page.toLowerCase()}`}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? 'nav-link-active text-dark' : 'nav-link'}
                  id='nav-link'
                >
                  {page}
                </a>
              </article>
            ))}
          </div>
        </div>
      // </div>
    //  </div>
  )
};

export default Navigation;


