import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"

import CauseCard from "../components/CauseCard"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query CausesQuery {
      causes: allAirtable(filter: {table: {eq: "Causes"}}) {
        nodes {
          data {
            Name
            Slug,
            Image {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 300, grayscale: false) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            },
            ImageCredit
          }
        }
      }
    }
  `);
  const mapImageSharp = function(field) {
    return field && field.localFiles && field.localFiles[0] && field.localFiles[0].childImageSharp && field.localFiles[0].childImageSharp.fluid;
  }
  let causes = (data.causes.nodes || []).map(o => o.data);

  return (<Layout title="Causes">
    <div className="main-content">
      <header>
          <h1 className="index-title">Causes</h1>
      </header>
      <section className="recent-posts">
      <div className="row listrecent">
      {
          causes.map((cause, index) =>
            <CauseCard 
              title={cause.Name} 
              img={mapImageSharp(cause.Image)} 
              path={'/causes/' + cause.Slug}
              imgCredit={cause.ImageCredit}
              key={index}
              />
          )
      }
      </div>
      </section>
    </div>
  </Layout>);
}

export default IndexPage
