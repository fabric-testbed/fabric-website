import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useTestbeds } from '../../hooks'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Subheading, Title, Paragraph } from '../../components/typography'
import { LinkIcon } from "../../components/icons"
import { ExternalLink } from "../../components/link"
import { Container as Grid, Row, Col } from 'react-grid-system'

const TestbedWrapper = styled.article`
  height: 600px;
  margin: 0 0 2rem 0;
  background-color: var(--color-lightgrey);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
  transition: filter 250ms;
  filter: drop-shadow(0 0 3px #00000033);
  &:hover {
    filter: drop-shadow(0 0 5px #00000033);
    .description {
      filter: opacity(1.0);
    }
    .footer {
      background-color: var(--color-primary-dark);
    }
  }
  & .header {
    min-height: 200px;
    max-height: 200px;
    border: 1px dashed crimson;
    background-color: var(--color-white);
    border: solid var(--color-primary);
    border-width: 0 0 4px 0;
    padding: 1rem;
    background-repeat: no-repeat;
    background-size: 200px;
    background-position: center center;
  }
  & .description {
    flex: 1;
    padding: 1rem;
    overflow: auto;
    filter: opacity(0.8);
    transition: filter 250ms;
  }
  & .footer {
    display: flex;
    justify-content: flex-end;
    background-color: var(--color-grey);
    transition: background-color 250ms;
    & .testbed-link {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

const TestbedCard = ({ testbed }) => {
  return (
    <TestbedWrapper>
      <div className="header" style={{ backgroundImage: `url(${ testbed.image.childImageSharp.original.src })` }}>
        <Subheading center hidden>{ testbed.name }</Subheading>
      </div>
      <div className="description">
        <Paragraph>
          { testbed.description }
        </Paragraph>
      </div>
      <div className="footer">
        <a href={ testbed.url } rel="noopener noreferrer" className="testbed-link" aria-label={ `Visit the ${ testbed.name } website` }>
          <LinkIcon fill="var(--color-white)" />
        </a>
      </div>
    </TestbedWrapper>
  )
}

const TestbedsView = () => {
  const testbeds = useTestbeds()
  return (
    <AnimateOnMount>
      <SEO title="Testbeds" />

      <Title>Testbeds</Title>

      <br />

      <Paragraph>
        FABRIC is a testbed of testbeds, helping users experiment using multiple testbeds. Like Lego blocks, users can get accounts on several testbeds and build an experiment using all of them.
      </Paragraph>

      <Paragraph>
        Additionally, testbeds can be powered by FABRIC. FABRIC can support testbeds as an underlying infrastructure, while not necessarily exposing the FABRIC interfaces to their users. Find a list of participating testbeds and facilities below.
      </Paragraph>

      <Paragraph>
        Don't see your testbed? Add it <ExternalLink to="https://share.hsforms.com/13ryeyx2VRjyaY9Q8kB9Wgg3ry9k">here</ExternalLink>.
        Need to update the information for your testbed? Update it <ExternalLink to="https://share.hsforms.com/1ITfbhOzyQqysDzXoEiodUg3ry9k">here</ExternalLink>.
      </Paragraph>

      <Paragraph>
        The page is community sourced. FABRIC is not responsible for its user-generated content.
      </Paragraph>

      <Grid fluid>
        <Row>
            {
              testbeds.map(testbed => (
                <Col key={ testbed.id } xs={ 12 } md={ 6 } lg={ 4 }>
                  <TestbedCard testbed={ testbed } />
                </Col>
              ))
            }
        </Row>
      </Grid>


    </AnimateOnMount>
  )
}

export default TestbedsView
