import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Paragraph } from '../../components/typography'

const TestbedsView = () => {
  return (
    <AnimateOnMount>
      <SEO title="Testbeds" />

      <Title>Testbeds</Title>

      <Paragraph>Testbeds</Paragraph>

    </AnimateOnMount>
  )
}

export default TestbedsView
