import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Footer from "./Footer"
import JavaScript from "./JavaScript"
import GoogleAnalytics from "./GoogleAnalytics"
import Head from "./Head"

const Layout = ({ children, footer, title }) => {
  return (<>
    <Head title={title}/>
    <Navbar menus={[{name:'Actions',url:'/actions'},{name:'Experiences',url:'/experiences'},{name:'Causes',url:'causes'}]}/>
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
}

export default Layout
