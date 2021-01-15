import React from 'react'
import styled from 'styled-components'
import { AnimateOnMount } from '../components/anim'
import { SEO } from '../components/seo'
import { Title, Heading, Paragraph } from '../components/typography'
import HubspotForm from 'react-hubspot-form'
import { HorizontalRule } from '../components/horizontal-rule'

const Table = styled.table`
  border: 2px solid var(--color-primary-light);
  & > thead {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  & tr.event {
    background-color: var(--color-primary-light);
  }
  & tr > th:first-child, tr > td:first-child {
    padding-left: 1rem;
  }
`

const solicitations = {
  current: [
    {
      name: 'CC* 21-528',
      url: 'https://www.nsf.gov/pubs/2021/nsf21528/nsf21528.htm',
    },
    {
      name: 'Computer and Information Science and Engineering Minority-Serving Institutions Research Expansion Program (CISE-MSI Program)',
      url: 'https://www.nsf.gov/pubs/2021/nsf21528/nsf21528.htm',
    },
    {
      name: 'ICE-T',
      url: 'https://www.nsf.gov/pubs/2018/nsf18535/nsf18535.htm',
    },
  ],
  expired: [
    {
      name: 'CISE Core 20-591',
      url: 'https://www.nsf.gov/pubs/2020/nsf20591/nsf20591.htm',
    },
    {
      name: 'CC* 20-507',
      url: 'https://www.nsf.gov/pubs/2020/nsf20507/nsf20507.htm',
    },
    {
      name: 'IRNC 20-535',
      url: 'https://www.nsf.gov/pubs/2020/nsf20535/nsf20535.htm',
    },
    {
      name: 'CICI',
      url: 'https://www.nsf.gov/pubs/2021/nsf21512/nsf21512.htm)',
    },
  ],
}

const GetInvolvedPage = () => (
  <AnimateOnMount>
    <SEO
      title="Get Involved" 
      description="We're excited to hear from the community, so feel free to contact us to learn how you or your organization can get involved with FABRIC." 
      keywords={ ["collaboration", "contact"] }
    />
    
    <Title>Get Involved with FABRIC</Title>

    <Heading>Funding Opportunities</Heading>

    <Paragraph>
      Do you have a project idea that would benefit from using FABRIC?
      We are interested in working with you. Check out the funding opportunities below.
    </Paragraph>

    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Link to Solicitation</th>
        </tr>
      </thead>
      <tbody>
        {
          solicitations.current.map(({ name, url }, i) => (
            <tr key={ i }>
              <td>{ name }</td>
              <td>{ url }</td>
            </tr>
          ))
        }
      </tbody>
    </Table>

    <Heading>Learn More</Heading>
    
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
      onSubmit={() => console.log('Submit!')}
      onReady={(form) => console.log('Form ready!')}
      loading={<div>Loading...</div>}
    />
  </AnimateOnMount>

)

export default GetInvolvedPage
