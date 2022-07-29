import { graphql, useStaticQuery } from 'gatsby'

const supportersLogosQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "supporters"}}) {
            logos: edges {
                node {
                    name
                    childImageSharp {
                        fixed(fit: CONTAIN, height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`

export const useSupportersLogos = () => {
    const { allFile } = useStaticQuery(supportersLogosQuery)
    return {
      nsfLogo: allFile.logos.filter(logo => logo.node.name === "nsf")[0].node,
      trustedCILogo: allFile.logos.filter(logo => logo.node.name === "trustedci")[0].node,
    }
}