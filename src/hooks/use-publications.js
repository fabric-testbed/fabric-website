import { graphql, useStaticQuery } from 'gatsby'

const publicationsQuery = graphql`{
    publications: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/resources/publications/"}}) {
        edges {
            node {
                frontmatter {
                    title
                    authors
                    link
                    doi
                    abstract
                }
            }
        }
    }
}
`

export const usePublications = () => {
    const { publications } = useStaticQuery(publicationsQuery)
    return publications.edges.map(({ node }) => ({ ...node.frontmatter }))
}
