import React from 'react'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Heading } from '../../components/typography'
import HubspotForm from 'react-hubspot-form'

const BetaTestersRequestPage = () => {
  return (
    <AnimateOnMount>
      <SEO
        title="Get Involved: Beta Testers Request" 
        description="We're excited to hear from the community, so feel free to contact us to learn how you or your organization can get involved with FABRIC." 
        keywords={ ["collaboration", "contact"] }
      />
      
      <Title>Get Involved with FABRIC</Title>

      <Heading>Beta Testers Request</Heading>
      
      <br/>
      
      <HubspotForm
        portalId='6342968'
        formId='54a21c36-e6f2-43e7-9960-d9e78af1d249'
        onSubmit={() => console.log('Beta Testers Form Submitted!')}
        onReady={(form) => console.log('Beta Testers Form Ready!')}
        loading={<div>Loading...</div>}
      />
    </AnimateOnMount>
  )
}

export default BetaTestersRequestPage
