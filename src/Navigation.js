import React from "react";
import "./Navigation.css";

function Navigation({ currentPage, handlePageChange, pages }) {
  return (
    <main className="container-fluid nav-container">
      <div className="row row-myname g-0">
        <div className="col-lg-6 col-m-6 col-sm-12 myname">
          <h1 className="my-name">Saidou Monta</h1>
        </div>
        <div className="col-lg-6 col-m-6 col-sm-12 navigation">
          <div className="row row-navigation">
            {pages.map((page) => (
              <div className="col-3" key={page}>
                <article className="nav-item m-0">
                  <a
                    href={`#${page}`}
                    onClick={() => handlePageChange(page)}
                    className={
                      currentPage === page
                        ? "nav-link-active text-light"
                        : "nav-link"
                    }
                    id="nav-link"
                    style={{ textDecoration: "none" }}
                  >
                    {page}
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navigation;
