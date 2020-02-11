import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SocialMedia from "../components/SocialMedia"
import ActionCard from "../components/ActionCard"

import Jumbotron from "../components/Jumbotron"
import CauseCard from "../components/CauseCard"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      actions: allAirtable(filter: {table: {eq: "Actions"} }) {
        nodes {
          data {
            Name
            Summary,
            Location,
            CommitmentTime,
            CommitmentFrequency,
            Slug,
            OrganisationLogo {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 300, grayscale: false) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      },
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
  let actions = (data.actions.nodes || []).map(o => o.data);
  let causes = (data.causes.nodes || []).map(o => o.data);

  // Sort by name (ascending)
  //organizations = applyFilter(organizations).sort((a, b) => stringCompare(a.title, b.title))

 //const sectors = data.sectors.nodes.sort((a, b) => stringCompare(a.data.Name, b.data.Name))

  return (<Layout title="Home" footer={Jumbotron}>
    <div className="main-content">

      <header>
          <h1 className="index-title">Interested in <strong>doing good</strong> with technology?</h1>
      </header>

      <section>
          <h3 className="index-sub">Join us and we'll share #techforgood actions you can take,
              <br /> or <a href="mailto:hello@goodwithtech.org">contribute</a> your own ideas &amp; experiences
          </h3>
          <form action="{{ with .Site.Params.mailchimp }}{{.}}{{end}}" method="post" name="mc-embedded-subscribe-form"
              target="_blank" noValidate>
              <div className="form-row align-items-center">
                  <div className="col-auto">
                      <label className="sr-only" htmlFor="homePageEmail">Email</label>
                      <input type="email" className="form-control" placeholder="Email" id="homePageEmail" name="EMAIL" autoComplete="on" required />
                  </div>
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text"
                          name="{{ with .Site.Params.mailprotect }}{{.}}{{end}}" tabIndex="-1" value="" readOnly /></div>
                  <div className="col-auto">
                      <input type="submit" value="Subscribe" className="btn btn-primary" name="subscribe" />
                  </div>
              </div>
          </form>
      </section>
      </div>
      <section className="recent-posts">
      <div className="section-title">
          <h2><span>Action you could take</span></h2>
      </div>
      <div className="row listrecent">
      {
          actions.slice(0, 6).map((action, index) =>
            <ActionCard 
              title={action.Name} 
              summary={action.Summary} 
              img={mapImageSharp(action.OrganisationLogo)} 
              path={'/actions/' + action.Slug}
              isBusinessAction={false}
              commitmentTime={action.CommitmentTime}
              commitmentFrequency={action.CommmitmentFrequency}
              location={action.Location}
              key={index}
              />
          )
      }
      </div>
      <nav>
          <ul className="pagination justify-content-end">
              <li className="page-item">
                  <Link className="page-link" to="actions/">View more actions...</Link>
              </li>
          </ul>
      </nav>
      </section>
      <section className="recent-posts">
      <div className="section-title">
          <h2><span>Causes</span></h2>
      </div>
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
      <nav>
          <ul className="pagination justify-content-end">
              <li className="page-item">
                  <Link className="page-link" to="causes/">View more causes...</Link>
              </li>
          </ul>
      </nav>
      </section>
      <section className="recent-posts">
      <div className="section-title">
          <h2><span>Experiences</span></h2>
      </div>
      <div className="row listrecent">
          {/* {{ range first 3 (where .Site.RegularPages "Type" "experiences") }}
          {{- partial "list-partials/postbox.html" . -}}
          {{end}} */}
      </div>
      <nav>
          <ul className="pagination justify-content-end">
              <li className="page-item">
                  <a className="page-link" href="experiences/">Read more experiences...</a>
              </li>
          </ul>
      </nav>

      </section>
      <SocialMedia />
  </Layout>);
}

export default IndexPage
