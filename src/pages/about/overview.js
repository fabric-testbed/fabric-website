import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Subheading, Paragraph } from '../../components/typography'
import { Module } from '../../components/layout'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { ButtonLink } from '../../components/button'
import { useCapabilities } from '../../hooks'

const CapabilityContainer = styled.div`
    display: flex;
    flex-direction: column;
    &:hover div {
        opacity: 1.0;
    }
    margin: 2rem 0;
`

const CapabilityHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const CapabilityIcon = styled(Img)`
    max-width: 75px;
    max-height: 75px;
    min-width: 75px;
    min-height: 75px;
    margin-right: 2rem;
    margin: 0 0 2.5rem 0;
    transition: background-color 500ms;
    border-radius: 3px;
    transition: opacity 250ms;
    background-color: var(--color-primary);
    opacity: 0.75;
    & img {
        padding: 1rem;
    }
`

const CapabilityTitle = styled(Subheading)`
    text-align: center;
`

const CapabilityBody = styled.div`
    margin: 0 0 0 0;
`

const ResponsiveVideoContainer = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    margin-bottom: 2rem;
    position: relative;
    height: 0;
    & iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`

const AboutPage = () => {
    const capabilities = useCapabilities()

    return (
        <AnimateOnMount>
            <SEO
                title="About FABRIC Testbed"
                description="View details about the FABRIC Testbed. Read about the cutting-edge technologies that are utilized by FABRIC. Additionally, view FABRIC branding and graphics resources."
            />
            
            <Title>About FABRIC</Title>

            <Module>
                <Paragraph>
                    FABRIC is a unique national research infrastructure to enable
                    cutting-edge and exploratory research at-scale in networking, cybersecurity,
                    distributed computing and storage systems, machine learning, and science applications. 
                </Paragraph>
                <Paragraph>
                    It is an <em>everywhere programmable</em> nationwide instrument comprised of novel extensible network elements
                    equipped with large amounts of compute and storage, interconnected by high speed, dedicated optical links.
                    It will connect a number of specialized testbeds (5G/IoT PAWR, NSF Clouds) and high-performance computing facilities
                    to create a rich fabric for a wide variety of experimental activities.
                </Paragraph>
            </Module>
            
            <Module title="FABRIC Capabilities">
                {
                    capabilities.map(capability => {
                        return (
                            <CapabilityContainer key={ capability.title }>
                                <CapabilityHead>
                                    <CapabilityIcon fluid={ capability.icon.childImageSharp.fluid } />
                                    <CapabilityTitle>FABRIC { capability.title }</CapabilityTitle>
                                </CapabilityHead>
                                <CapabilityBody dangerouslySetInnerHTML={{ __html: capability.html }} />
                            </CapabilityContainer>
                        )
                    })
                }
            </Module>
 
            <Module title="What is FABRIC?">
                <Paragraph>
                    Below are two resources&mdash;a presentation and a webinar&mdash;that
                    may provide further information to assist with answering your FABRIC questions.
                </Paragraph>

                <Grid fluid>

                    <Row>
                        <Col xs={ 12 } md={ 6 }>
                            <Subheading>Presentation</Subheading>
                            <ResponsiveVideoContainer>
                                <iframe title="Presentation: What is FABRIC?" src="https://drive.google.com/file/d/1Wa8kkuyycSBRNjUZIVYXFbSRHt2n4Vhy/preview" width="100%" height="600"></iframe>
                            </ResponsiveVideoContainer>
                        </Col>
                        <Col xs={ 12 } md={ 6 }>
                            <Subheading>Webinar</Subheading>
                            <ResponsiveVideoContainer>
                               <iframe title="Webinar: What is FABRIC?" width="948" height="518" src="https://www.youtube.com/embed/ofLz_7rWTDg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </ResponsiveVideoContainer>
                        </Col>
                    </Row>
                </Grid>
            </Module>

            
            <Paragraph center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ButtonLink to="/resources/brochures" secondary>Download FABRIC Brochures</ButtonLink>
            </Paragraph>

        </AnimateOnMount>

    )
}

export default AboutPage
