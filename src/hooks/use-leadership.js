import { graphql, useStaticQuery } from 'gatsby'

const leadershipQuery = graphql`
    {
        leadership: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/leadership/"}}, sort: {order: DESC, fields: fileAbsolutePath}) {
            edges {
                node {
                    frontmatter {
                        name
                        photo {
                            childImageSharp {
                                fixed(width: 150) {
                                    base64
                                    tracedSVG
                                    aspectRatio
                                    width
                                    height
                                    src
                                    srcSet
                                    srcWebp
                                    srcSetWebp
                                    originalName
                                }
                            }
                        }
                    }
                    html
                }
            }
        }
    }
`

export const useLeadership = () => {
    const { leadership } = useStaticQuery(leadershipQuery)
    return leadership.edges.map(({ node }) => node)
}
