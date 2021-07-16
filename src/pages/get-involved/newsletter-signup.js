import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Heading, Paragraph } from '../../components/typography'
import HubspotForm from 'react-hubspot-form'
import { HorizontalRule } from '../../components/horizontal-rule'

const NewsletterSignupPage = () => {
  return (
    <AnimateOnMount>
      <SEO
        title="Get Involved: Newsletter Signup" 
        description="We're excited to hear from the community, so feel free to contact us to learn how you or your organization can get involved with FABRIC." 
        keywords={ ["collaboration", "contact"] }
      />
      
      <Title>Get Involved with FABRIC</Title>

      <Heading>Newsletter Signup</Heading>
      
      <Paragraph>
        Interested in learning more about FABRIC?
        Sign up here to receive email announcements and be the first to hear about our community workshops, events, and news!
      </Paragraph>
      
      <br/>

      <HorizontalRule />
      
      <br/>
      
      <HubspotForm
        portalId='6342968'
        formId='05693d2f-b08d-4def-8fa7-d31d54c74a59'
        onSubmit={() => console.log('Email Subscription Form Submitted!')}
        onReady={(form) => console.log('Email Subscription Form Ready!')}
        loading={<div>Loading...</div>}
      />
    </AnimateOnMount>
  )
}

export default NewsletterSignupPage
