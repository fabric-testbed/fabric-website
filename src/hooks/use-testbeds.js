import { graphql, useStaticQuery } from 'gatsby'

const testbedsQuery = graphql`{
  testbeds: allTestbedsYaml {
    nodes {
      id
      name
      url
      description
    }
  }
}`

export const useTestbeds = () => {
    const { testbeds } = useStaticQuery(testbedsQuery)
    return testbeds.nodes.sort((s, t) => s.name.toLowerCase() < t.name.toLowerCase() ? -1 : 1)
}

// on the list of testbeds/sc centers
// name
// one-line description: "testbed for networking", "super computing center for blah bah", ...
// 
// 