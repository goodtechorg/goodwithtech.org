import React from "react"
import AlertBar from "./AlertBar"

const Footer = () => {
  
  return (<>
    <AlertBar />
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-8 text-center text-lg-left">
                    This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.</div>
                <div className="col-md-4 col-sm-4 text-center text-lg-right">    
                    <a href="https://www.iubenda.com/privacy-policy/45535364">Privacy Policy</a> | <a href="/about">About us</a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}


export default Footer
