import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useTestbeds } from '../../hooks'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Subheading, Title, Paragraph } from '../../components/typography'
import { LinkIcon } from "../../components/icons"
import { Container as Grid, Row, Col } from 'react-grid-system'

const TestbedWrapper = styled.article`
  height: 400px;
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
  }
  & ${ Subheading } {
    padding: 1rem;
    background-color: var(--color-white);
    border: solid var(--color-primary);
    border-width: 0 0 4px 0;
  }
  & .description {
    padding: 0 1rem;
    flex: 1;
    // color: var(--color-white);
  }
  & .footer {
    display: flex;
    justify-content: flex-end;
    background-color: var(--color-grey);
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
      <Subheading center>{ testbed.name }</Subheading>
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
