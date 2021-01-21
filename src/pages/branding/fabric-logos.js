import React, { Fragment } from 'react'
import { AnimateOnMount } from '../../components/anim'
import styled from 'styled-components'
import { SEO } from '../../components/seo'
import { Title, Heading, Paragraph } from '../../components/typography'
import { ButtonLink } from '../../components/button'
import { Module } from '../../components/layout'
import { Container, Col, Row } from 'react-grid-system'

const LogoContainer = styled.div`
    background-color: ${ props => props.background ? props.background : 'transparent' };
    border: 1px solid var(--color-black);
    border-radius: 0.25rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    justiify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 16rem;
    & img {
        display: block;
        margin: auto;
    }
`

const LogoBlock = ({ url, altText, background }) => {
    return (
        <Fragment>
            <LogoContainer background={ background }>
                <img src={ url } alt={ altText }/>
            </LogoContainer>
            <Paragraph center>
                <a href={ url } target="_blank" rel="noopener noreferrer">Download</a>
            </Paragraph>
        </Fragment>
    )
}

const FabricLogosPage = () => (
    <AnimateOnMount>
        <SEO
            title="Logos"
            description="Logos and branding resources for FABRIC."
            keywords={ ["branding", "logos", "style"] }
        />

        <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center' }}>
            <Title>FABRIC Logos</Title>
            <ButtonLink to="/branding/fab-logos" primary>View FAB Logos</ButtonLink>
        </div>

        <br />
        
        <Paragraph>
            We have a few different style and color variations on the FABRIC surface logo design available for download.
            Feel free to download and use the FABRIC logo that best suits your use case.
            Note that each of the logos has a transparent background and are optimized for use on either light of dark background colors.
        </Paragraph>

        <Module title="For Light Backgrounds">
            <Paragraph>
                Each of these logos has a transparent background and are optimized for use on light background colors.
            </Paragraph>

            <Container>
                <Row>
                    <Col xs={ 12 } sm={ 4 }>
                        <LogoBlock
                            url="https://www.dropbox.com/s/26lsgihw277bfgm/2019_NRIG_FABRIC%20logo%20Dark.png?raw=1"
                            altText="Fabric logo with text below surface"
                        />
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <LogoBlock background="#eeefff"
                            url="https://www.dropbox.com/s/p02zqsutv991iel/2019_NRIG_Fabric%20dark%20text%20right.png?raw=1"
                            altText="Fabric logo with text beside surface"
                        />
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <LogoBlock background="#bbddee"
                            url="https://www.dropbox.com/s/8rnpjckb4auct03/2019_NRIG_Fabric%20dark%20wave.png?raw=1"
                            altText="Fabric surface logo without text"
                        />
                    </Col>
                </Row>
                <br/>
            </Container>

        </Module>


        <Module title="For Dark Backgrounds">
            <Paragraph>
                Each of these logos has a transparent background and are optimized for use on dark background colors.
            </Paragraph>

            <Container>
                <Row>
                    <Col xs={ 12 } sm={ 4 }>
                        <LogoBlock background="var(--color-black)"
                            url="https://www.dropbox.com/s/1gz57gt3tn7nxkh/2019_NRIG_FABRIC%20logo%20light.png?raw=1"
                            altText="Fabric logo with text below surface"
                        />
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <LogoBlock background="var(--color-black)"
                            url="https://www.dropbox.com/s/mbuk7mgkrni17fe/2019_NRIG_Fabric%20light%20text%20right.png?raw=1"
                            altText="Fabric logo with text beside surface"
                        />
                    </Col>
                    <Col xs={ 12 } sm={ 4 }>
                        <LogoBlock background="var(--color-black)"
                            url="https://www.dropbox.com/s/a43hdnx08evxp3i/2019_NRIG_Fabric%20white%20wave.png?raw=1"
                            altText="Fabric surface logo without text"
                        />
                    </Col>
                </Row>
                <br/>
            </Container>
        </Module>

    </AnimateOnMount>

)

export default FabricLogosPage
