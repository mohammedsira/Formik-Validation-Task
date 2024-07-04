import React from 'react';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
    return (
        <div>
            <header className="p-3 text-bg-dark">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to='/' className="nav-link px-2 text-white fs-3 ">Book-Details</NavLink></li>
                        <li><NavLink to='/addbooks' className="nav-link px-2 text-white fs-3">Add-Books</NavLink></li>
                        <li><NavLink to='/managelibrary' className="nav-link px-2 text-white fs-3">ManageLibrary</NavLink></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>

            </header>
        </div>
    );
};

export default Topbar;