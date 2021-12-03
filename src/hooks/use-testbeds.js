import { graphql, useStaticQuery } from 'gatsby'

const testbedsQuery = graphql`{
  testbeds: allTestbedsYaml {
    nodes {
      id
      name
      url
      image {
        childImageSharp {
          original {
            width
            height
            src
          }
        }
      }
      description
    }
  }
}`

export const useTestbeds = () => {
    const { testbeds } = useStaticQuery(testbedsQuery)
    return testbeds.nodes.sort((s, t) => s.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1)
}
