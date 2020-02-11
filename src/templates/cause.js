import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
// import OrganizationCard from "../components/OrganizationCard"
// import OrganizationFilter, {useOrganizationFilterState} from "../components/OrganizationFilter"

const CauseTemplate = ({ data }) => {
  //const [filter, setFilter, applyFilter] = useOrganizationFilterState();

  const name = data.airtable.data.Name

//   // Avoid breaking if the sector has no orgs + map out nested data object
//   let organizations = (data.airtable.data.Organizations || [])
//     .map(o => o.data)
//     .map(({ Name, About, Tags, Homepage, City, State_Province, Country, Tagline, Logo, Headcount, Organization_Type }) => ({
//       title: Name,
//       description: Tagline || About,
//       tags: Tags,
//       location: filterDuplicateAndEmptyItems(City, State_Province, Country).join(', '),
//       headcount: Headcount,
//       orgType: Organization_Type,
//       homepage: Homepage,
//       logo: Logo && Logo.localFiles[0] && Logo.localFiles[0].childImageSharp && Logo.localFiles[0].childImageSharp.fluid,
//     }));

//   // Sort by name (ascending)
//   organizations = applyFilter(organizations).sort((a, b) => stringCompare(a.title, b.title))

  return <Layout contentClassName="bg-gray-200">
    <div className="max-w-4xl mx-auto pb-4">
      <h2 className="text-3xl tracking-wide font-light p-3 md:mt-4">
        {name} Cause
      </h2>

      
    </div>
  </Layout>
}

export const query = graphql`
  query CausesPageQuery($slug: String) {
    airtable(table: { eq: "Causes" }, data: { Slug: { eq: $slug } }) {
      data {
        Name
        Actions {
          data {
            Name,
            Slug
          }
        }
      }
    }
  }
`

export default CauseTemplate
