import React from 'react'
import { graphql, Link } from 'gatsby'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Paragraph, Meta } from '../../components/typography'
import { ButtonLink } from '../../components/button'
import { Truncated } from '../../components/layout'
import { Container, Row, Col, Visible } from 'react-grid-system'
import { Module } from '../../components/layout'

const EventsList = ({ title, events }) => {
    return (
        <Module title={ title }>
            <Container>
                <Row>
                    <Col xs={ 12 } sm={ 4 } md={ 3 }>Date</Col>
                    <Col xs={ 12 } sm={ 8 } md={ 6 }>Title</Col>
                    <Visible md lg xl><Col md={ 3 }>Event Link</Col></Visible>
                </Row>
                <br/>
                {
                    events.length
                        ? events.map(event => {
                            const { title, path, date, display_date, url, fabricHosted } = event.node.frontmatter
                            return (
                                <Row key={ title }>
                                    <Col xs={ 12 } sm={ 4 } md={ 3 }>
                                        <Meta>{ display_date ? display_date : date }</Meta>
                                    </Col>
                                    <Col xs={ 12 } sm={ 8 } md={ 6 }>
                                        <h5 style={{ lineHeight: 1.5 }}>
                                            <Link to={ path }>{ title }</Link>
                                            { fabricHosted ? '*' : null }
                                        </h5>
                                    </Col>
                                    <Visible md lg xl>
                                        <Col md={ 3 }>
                                            <Meta><Truncated><a href={ url } target="_blank" rel="noreferrer noopener">{ url }</a></Truncated></Meta>
                                        </Col>
                                    </Visible>
                                </Row>
                            )
                        })
                    : <Paragraph center>There are no events to display at the moment. Please check back soon!</Paragraph>
            }
            { events.length ? <Meta right>* FABRIC-hosted event</Meta> : null }
            </Container>
        </Module>
    )
}

export default ({ data, pageContext }) => {
    const events = data.events.edges

    return (
        <AnimateOnMount>
            <SEO
                title="Upcoming FABRIC Events"
                description="Come meet the FABRIC team in person! Read about upcoming events that are related to FABRIC and the FABRIC team, inclusing conferences, workshops, and meet-ups."
                keywords={ ["events", "conferences", "meet-ups", "workshops", "presentations", "hackathon"] }
            />
            
            <Title>Upcoming Events</Title>
            

            <Paragraph>
                See the list below of conferences and workshops in which the FABRIC team is involved.
            </Paragraph>
            
            <EventsList events={ events } />

            <Paragraph center>
                <ButtonLink primary={ true } to="/events/archive">View our past events</ButtonLink>
            </Paragraph>

        </AnimateOnMount>
    )
}

export const allEventsQuery = graphql`
    query($todaysDate: Date!) {
        events:allMarkdownRemark(
            sort: {fields: frontmatter___date, order: ASC},
            filter: {
                fileAbsolutePath: {regex: "/events/"}
                frontmatter: {
                    date: {gt: $todaysDate}
                }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMM D, YYYY")
                        display_date
                        path
                        title
                        url
                        fabricHosted
                    }
                }
            }
        }
    }
`