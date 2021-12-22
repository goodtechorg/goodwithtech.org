import React, { useState } from "react"
import { Link } from "gatsby"

import SiteLogo from "../images/logo.png"

const Navbar = ({ menus }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container pr-0">
            <Link className="navbar-brand" to="/">
                <img src={SiteLogo} alt="logo" />
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMediumish" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarMediumish">
                <ul className="navbar-nav ml-auto">
                    {menus.map((menu) =>
                    <li class="nav-item">
                        <Link className="nav-link" activeClassName="active" to={menu.url}>{menu.name}</Link>
                    </li>
                    )}
                    <li className="nav-item"><a href="http://eepurl.com/geCUU1" class="btn btn-primary">Join us <i class="fa fa-sign-in-alt"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
