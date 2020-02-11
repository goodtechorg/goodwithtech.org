import React from "react"

const AlertBar = () => (
    <div className="alertbar">
        <div className="container text-center">
            <span>
                Get new <b>actions</b> and <b>opportunities</b> in #techforgood, subscribe to our newsletter
            </span>

            <form action="{{ with .Site.Params.mailchimp }}{{.}}{{end}}" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                <input type="email" placeholder="Email" name="EMAIL" autoComplete="on" required />
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="{{ with .Site.Params.mailprotect }}{{.}}{{end}}" tabIndex="-1" value="" readOnly/></div>
                <input type="submit" value="Subscribe" name="subscribe" />
            </form>
        </div>
    </div> 
  );

export default AlertBar
