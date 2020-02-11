import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const CauseCard = ({ title, img, path, imgCredit }) => (
  <div className="col-lg-4 col-md-6 mb-30px card-group">
      <div className="card">
          {img && 
              <Img fluid={img} className="card-img-top" alt={title} title={imgCredit} />
          }
          <div className="card-body">
              <h2 className="card-title"><Link to={path} className="text-dark stretched-link">{title}</Link></h2>
          </div>
      </div>
  </div>
);

export default CauseCard;

