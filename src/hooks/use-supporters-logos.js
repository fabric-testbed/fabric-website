import { graphql, useStaticQuery } from 'gatsby'

const supportersLogosQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "supporters"}}) {
            logos: edges {
                node {
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
        nsfLogo: allFile.logos[0].node,
        trustedCILogo: allFile.logos[1].node,
    }
}
