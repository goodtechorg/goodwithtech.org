import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ActionCard = ({ title, summary, img, path, isBusinessAction, commitmentTime, commitmentFrequency, location }) => (
  <div className="col-lg-4 col-md-6 mb-30px card-group">
      <div className="card">
          {img && 
              <Link to={path}><Img fluid={img} className="card-img-top" alt={title} /></Link>
          }
          <div className="card-body">
              <h2 className="card-title"><Link to={path} className="text-dark">{title}</Link></h2>
              <p className="card-text">{summary}</p>            
          </div>
          <div className="card-footer">
              <small>
                  <span className="post-date">
                      {(isBusinessAction && <i title="A business action" className="fas fa-building"></i>) || <i title="An individual action" className="fas fa-user"></i>}&nbsp;-
                      {commitmentTime} {commitmentFrequency} -&nbsp;<i className="fas fa-globe"></i> {location}
                  </span>
              </small>
          </div>
      </div>
  </div>
);

export default ActionCard;

