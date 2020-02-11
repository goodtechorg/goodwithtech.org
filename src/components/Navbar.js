import React, { useState } from "react"
import { Link } from "gatsby"

import SiteLogo from "../images/logo.png"

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container pr-0">
            <Link className="navbar-brand" to="/">
                <img src="/logo.png" alt="logo" />
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMediumish" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarMediumish">
                {/*{ $currentPage := . }*/}
                <ul className="navbar-nav ml-auto">
                    {/* {{ range .Site.Menus.main }} 
                    <li class="nav-item {{ if $currentPage.HasMenuCurrent "main" . }}active{{ end }}">
                        <a class="nav-link" href="{{ .URL }}">{{ .Name | title }}</a>
                    </li>
                    {{ end }}
                    <li class="nav-item"><a href="http://eepurl.com/geCUU1" class="btn btn-primary">Join us <i class="fa fa-sign-in-alt"></i></a>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
