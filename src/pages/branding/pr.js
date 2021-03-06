import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Subheading, Paragraph } from '../../components/typography'
import { Module } from '../../components/layout'
import { Container, Row, Col } from 'react-grid-system'
import { useWindowWidth } from '../../hooks'

const ImagePreviewColumn = styled(Col)`
    text-align: center;
`

const ImagePreview = styled.img`
    max-height: 200px;
`

const ImageResource = ({ title, url }) => {
    const { isCompact } = useWindowWidth()

    return (
        <Container>
            <Row>
                <ImagePreviewColumn xs={ 12 } sm={ 3 }>
                    <ImagePreview src={ url } />
                </ImagePreviewColumn>
                <Col xs={ 12 } sm={ 9 }>
                    <Subheading center={ isCompact }>{ title }</Subheading>
                    <Paragraph center={ isCompact }>
                        <a href={ url } target="_blank" rel="noreferrer noopener">{ url }</a>
                    </Paragraph>
                </Col>
            </Row>
        </Container>
    )
}

const ResourcesPage = props => {
    return (
        <AnimateOnMount>
            <SEO
                title="FABRIC PR Resources"
                description="PR resource library for FABRIC."
            />
            
            <Title>FABRIC PR Resources</Title>

            <Module title="Branding & Style Guide">
                <Paragraph>
                    Do you want to write about FABRIC or use our branding resources?
                    Feel free to download and use our <Link to="/about/logos">FABRIC logos</Link>, and
                    consult our <a href="https://www.dropbox.com/s/knsk13dtpy8v83y/2019_NRIG_FABRIC%20Style%20Guide%20V2.pdf?dl=0" target="_blank" rel="noopener noreferrer">Branding & Style Guide</a> to
                    see how to best utilize FABRIC brand assets, including our logos, colors, typography.
                </Paragraph>
            </Module>

            <Module title="Graphics">
                <Paragraph>
                    We make detailed graphics to illustrate features and plans for FABRIC.
                    They are made publicly accessible,
                    so feel free to use the graphics below to help spread the word about FABRIC.
                </Paragraph>

                <ImageResource
                    title="Anticipated FABRIC Topology Map"
                    url="https://www.dropbox.com/s/1sp5x72l1fkypar/FABRIC%20map_V7%20no%20Logos.png?raw=1"
                />
                
                <ImageResource
                    title="Anticipated FABRIC Topology Map with Partner Logos"
                    url="https://www.dropbox.com/s/8jv2294h6zm1ccy/FABRIC%20map_V7%20Initial%20PR.png?raw=1"
                />
            </Module>

        </AnimateOnMount>

    )
}

export default ResourcesPage
