import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useTestbeds } from '../../../hooks'
import { AnimateOnMount } from '../../../components/anim'
import { SEO } from '../../../components/seo'
import { Subheading, Title, Paragraph } from '../../../components/typography'
import { LinkIcon } from "../../../components/icons"

const Wrapper = styled.article`
  .header {
    display: flex;
    justify-content: space-between;
    a {
      transition: filter 250ms;
    }
    a:hover {
      filter: opacity(0.5);
    }
  }
`

const TestbedDetail = ({ testbed }) => {
  return (
    <Wrapper>
      <div className="header">
        <Subheading>{ testbed.name }</Subheading>
        <a href="/" rel="noopener noreferrer"><LinkIcon fill="var(--color-primary)" /></a>
      </div>
      <Paragraph>{ testbed.description }</Paragraph>
    </Wrapper>
  )
}

const TestbedsView = () => {
  const testbeds = useTestbeds()
  return (
    <AnimateOnMount>
      <SEO title="Testbeds" />

      <Title>Testbeds</Title>

      { testbeds.map(testbed => <TestbedDetail testbed={ testbed } />) }


    </AnimateOnMount>
  )
}

export default TestbedsView
