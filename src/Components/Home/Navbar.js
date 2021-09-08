import logo from '../../images/logo.png';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar custom-navbar navbar-expand-lg navbar-light">

            <div class="container">

                <a class="navbar-brand" href="/">
                    <img src={logo} alt="JBITL Logo" width="100" height="60" />
                </a>


                <button class="navbar-toggler custom-toggler mt-2 mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item text-center">
                            <a className="nav-link text-white" aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item dropdown text-center">
                            <a className="nav-link dropdown-toggle text-white" href="/about" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ABOUT
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item text-center" href="/mission-approach">Mission and Approach</a></li>
                                <li><a className="dropdown-item text-center" href="/focus-areas">Focus Areas</a></li>
                                <li><a className="dropdown-item text-center" href="/board-of-advisors">Board of Advisors</a></li>
                                <li><a className="dropdown-item text-center" href="/team">Team</a></li>
                            </ul>
                        </li>

                        <li class="nav-item text-center">
                            <a class="nav-link text-white" aria-current="page" href="/publication">PUBLICATIONS</a>
                        </li>

                        <li className="nav-item dropdown text-center">
                            <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PROJECTS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item text-center" href="/project-name">Project 1</a></li>
                                <li><a className="dropdown-item text-center" href="/project-name">Project 2</a></li>
                                <li><a className="dropdown-item text-center" href="/project-name">Project 3</a></li>
                            </ul>
                        </li>

                        <li class="nav-item text-center">
                            <a class="nav-link text-white" aria-current="page" href="/experts">EXPERTS</a>
                        </li>

                        <li class="nav-item text-center">
                            <a class="nav-link text-white" aria-current="page" href="/connect">CONNECT</a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;