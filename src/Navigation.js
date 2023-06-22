import React from 'react';
import './Navigation.css';

function Navigation({ currentPage, handlePageChange, pages }) {

  return (
      <div className='row-top'>
        <div className='col-lg-6 col-m-6 col-sm-12 myname'>
          <h1 className='my-name'>Saidou Monta</h1>
        </div>
        <div className='col-lg-6 col-m-6 col-sm-12 navigation'>
            {pages.map((page) => (
              <article key={page} className='nav-item m-0'>
                <a
                  href={`#${page}`}
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
  )
};

export default Navigation;


