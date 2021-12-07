import React, {  useMemo, useState } from 'react'
import styled from 'styled-components'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Heading, Paragraph } from '../../components/typography'
import { ExternalLink } from '../../components/link'
import { ChevronDownIcon, ChevronUpIcon } from '../../components/icons'
import { useSolicitations } from '../../hooks'
import { LinkIcon } from '../../components/icons'

const Table = styled.table`
  border: 2px solid var(--color-primary-light);
  font-size: 95%;
  & > thead {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  & td, th {
    padding: 0.5rem 1rem;
  }
  & tr.expired-note {
    background-color: var(--color-dark);
    color: var(--color-white);
  }
  & tr.expired {
    background-color: var(--color-lightgrey);
  }
`

const Toggler = styled.button.attrs({ role: 'button' })`
  width: 100%;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: var(--color-white);
  transition: color 250ms;
  &:hover {
    color: var(--color-primary-light);
  }
`

const FundingOpportunitiesPage = () => {
  const solicitations = useSolicitations()
  const [open, setOpen] = useState(false)

  const handleToggleOpportunities = () => setOpen(!open)

  const FundingOpportunitiesToggler = useMemo(() => {
    return (
      <Toggler onClick={ handleToggleOpportunities } style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem' }}>
        <em>{ open ? 'Hide' : 'View' } Expired Opportunities</em>
        { open ? <ChevronUpIcon fill="var(--color-white)" /> : <ChevronDownIcon fill="var(--color-white)" /> }
      </Toggler>
    )
  }, [open])

  return (
    <AnimateOnMount>
      <SEO
        title="Get Involved: Funding Opportunities" 
        description="We're excited to hear from the community, so feel free to contact us to learn how you or your organization can get involved with FABRIC." 
        keywords={ ["collaboration", "contact"] }
      />
      
      <Title>Get Involved with FABRIC</Title>

      <Heading>Funding Opportunities</Heading>

      <Paragraph>
        Do you have a project idea that would benefit from using FABRIC?
        The FABRIC team welcomes requests for Letters of Collaboration. 
        To expedite the process, please contact us by 
        filling out the <a href="https://forms.gle/MKV5SfpdSS24XbFD7" target="_blank" rel="noopener noreferrer"><b>LoC Request Form</b></a>.
      </Paragraph>

      <Table>
        <thead>
          <tr>
            <th width="25%" colspan="2">Solicitation</th>
            <th colspan="1">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {
            solicitations.current.map(({ name, url, displayDate }, i) => (
              <tr key={ i } className="current">
                <td><ExternalLink to={ url }>{ name }</ExternalLink></td>
                <td><ExternalLink to={ url }><LinkIcon size={ 24 } fill="var(--color-primary)" /></ExternalLink></td>
                <td>{ displayDate }</td>
              </tr>
            ))
          }
          <tr className="expired-note">
            <td colspan="3" style={{ padding: 0 }}>
              { FundingOpportunitiesToggler }
            </td>
          </tr>
          {
            open && solicitations.expired.map(({ name, url, displayDate }, i) => (
              <tr key={ i } className="expired">
                <td><ExternalLink to={ url }>{ name }</ExternalLink></td>
                <td><ExternalLink to={ url }><LinkIcon size={ 24 } fill="var(--color-primary)" /></ExternalLink></td>
                <td>{ displayDate }</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </AnimateOnMount>
  )
}

export default FundingOpportunitiesPage
