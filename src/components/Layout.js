import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Footer from "./Footer"
import JavaScript from "./JavaScript"
import GoogleAnalytics from "./GoogleAnalytics"
import Head from "./Head"

import "./layout.css"

const Layout = ({ children, footer, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (<>
    <Head title={title}/>
    <Navbar />
    <main className="site-content container">   
        {children}
    </main>
    {footer}
    <Footer />
    <JavaScript />
    <GoogleAnalytics />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  contentClassName: PropTypes.string
}

export default Layout
