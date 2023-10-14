import React from 'react'
import "../../../Css/Home.css"

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='logo'>
                    <a className="navbar-brand" href="#">
                        <img className='image-brand' src="/images/logotravel.jpeg" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Destination
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Package</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Contact Us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> <i class="fa-solid fa-bars"></i> </ button>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </nav>

        </div>
    )
}

export default Header