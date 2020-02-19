import React from "react"
import { graphql } from 'gatsby'

// import { stringCompare } from "../utils/string"

import Layout from "../components/Layout"
// import OrganizationCard from "../components/OrganizationCard"
// import OrganizationFilter, {useOrganizationFilterState} from "../components/OrganizationFilter"

const ActionTemplate = ({ data }) => {
  //const [filter, setFilter, applyFilter] = useOrganizationFilterState();

  const name = data.airtable.data.Name

  // function filterDuplicateAndEmptyItems(...items) {
  //   return [...new Set(items)].filter(m=>m);
  // }

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
        {name}
      </h2>

      
    </div>
  </Layout>
}

export const query = graphql`
  query ActionPageQuery($slug: String) {
    airtable(table: { eq: "Actions" }, data: { Slug: { eq: $slug } }) {
      data {
        Name,
        Slug
      }
    }
  }
`

export default ActionTemplate
