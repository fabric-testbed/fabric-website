import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Paragraph } from '../../components/typography'

const PublicationsPage = () => (
    <AnimateOnMount>
        <SEO title="Publications" />
        
        <Title>Publications</Title>

        <Paragraph>
            Coming soon.
        </Paragraph>
    </AnimateOnMount>

)

export default PublicationsPage
