import React, { useMemo, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useTestbeds } from '../../hooks'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Heading, Subheading, Subsubheading, Title, Paragraph } from '../../components/typography'
import { BackspaceIcon, LinkIcon } from "../../components/icons"
import { Button } from "../../components/button"
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
    .description {
      filter: opacity(1.0);
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
    background-color: #ffffffaa;
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
    &:hover {
      background-color: var(--color-primary);
    }
    & .testbed-link {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: flex-end;
      margin: 0 1rem;
      align-items: center;
      width: 100%;
    }
  }
`

const SearchForm = styled.div`
  margin-bottom: 3rem;
  position: relative;
  display: flex
  ${ Heading } {
    font-size: 120%;
    margin-bottom: 0.5rem;
  }
  .clear-button {
    height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: var(--color-primary) !important;
    border: 0;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: filter 250ms;
    padding: 0.5rem;
    &:hover {
      filter: saturate(0.5);
    }
  }
`

const QueryField = styled.input.attrs({ type: 'text' })`
  width: 100%;
  border: 2px solid var(--color-primary);
  margin: auto;
  padding: 0.5rem;
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
        <a href={ testbed.url } target="_blank" rel="noopener noreferrer" className="testbed-link" aria-label={ `Visit the ${ testbed.name } website` }>
          <LinkIcon fill="var(--color-white)" />
        </a>
      </div>
    </TestbedWrapper>
  )
}

const TestbedsView = () => {
  const testbeds = useTestbeds()
  const [query, setQuery] = useState('')

  const filteredTestbeds = useMemo(() => {
    const reducedQuery = query.toLowerCase().trim()
    return testbeds.filter(testbed => (
      testbed.name.toLowerCase().includes(reducedQuery) || testbed.description.toLowerCase().includes(reducedQuery))
    )
  }, [query])

  const handleChangeQuery = event => setQuery(event.target.value)

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
        Want your testbed or facility listed? Add it <ExternalLink to="https://share.hsforms.com/13ryeyx2VRjyaY9Q8kB9Wgg3ry9k">here</ExternalLink>.
        Need to update the information for your testbed? Update it <ExternalLink to="https://share.hsforms.com/1ITfbhOzyQqysDzXoEiodUg3ry9k">here</ExternalLink>.
      </Paragraph>

      <Paragraph>
        The page is community sourced. FABRIC is not responsible for its user-generated content.
      </Paragraph>


      <Grid fluid>
        <Row justify="around">
          <Col xs={ 12 } sm={ 10 }>
            <Subsubheading>Filter Testbeds</Subsubheading>
            <SearchForm>
              <QueryField value={ query } onChange={ handleChangeQuery } />
              <button className="clear-button" onClick={ () => setQuery('') }>
                <BackspaceIcon fill="white" />
              </button>
            </SearchForm>
          </Col>
        </Row>
        <Row>
          {
            filteredTestbeds.length ? (
              filteredTestbeds.map(testbed => (
                <Col key={ testbed.id } xs={ 12 } md={ 6 } lg={ 4 }>
                  <AnimateOnMount>
                    <TestbedCard testbed={ testbed } />
                  </AnimateOnMount>
                </Col>
              ))
            ) : (
              <Col key="no-results" xs={ 12 }>
                <br />
                <Heading center>"{ query }" doesn't match any testbeds.</Heading>
              </Col>
            )
          }
        </Row>
      </Grid>


    </AnimateOnMount>
  )
}

export default TestbedsView
