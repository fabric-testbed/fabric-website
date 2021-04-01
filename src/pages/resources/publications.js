import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { AnimateOnMount } from '../../components/anim'
import { SEO } from '../../components/seo'
import { Title, Paragraph, Subheading } from '../../components/typography'
import { ChevronDownIcon, ChevronUpIcon } from '../../components/icons'

const Toggler = styled.button.attrs({ role: 'button' })`
  width: 100%;
  height: 2rem;
  font-weight: 600;
  background-color: var(--color-primary);
  border: 0;
  cursor: pointer;
  color: var(--color-white);
  transition: color 250ms;
  &:hover {
    color: var(--color-primary-light);
  }
`

const PublicationsPage = () => {
  const [open, setOpen] = useState(false)

  const handleToggleAbstracts = () => setOpen(!open)

  const AbstractToggler = useMemo(() => {
    return (
      <Toggler onClick={ handleToggleAbstracts } style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem' }}>
        <em>{ open ? 'Hide' : 'View' } Abstract</em>
        { open ? <ChevronUpIcon fill="var(--color-white)" /> : <ChevronDownIcon fill="var(--color-white)" /> }
      </Toggler>
    )
  }, [open])

  return (
      <AnimateOnMount>
      <SEO title="Publications" />
      
      <Title>Publications</Title>

      <Paragraph>
          <h3>
            <a href="https://ieeexplore.ieee.org/document/8972790" target="_blank" rel="noreferrer">
              FABRIC: A National-Scale Programmable Experimental Network Infrastructure
            </a>
          </h3>
          <p>Ilya Baldin, Anita Nikolich, James Griffioen, Indermohan Inder S. Monga, Kuang-Ching Wang, Tom Lehman, Paul Ruth<br></br>
          DOI: <a href="10.1109/MIC.2019.2958545" target="_blank" rel="noreferrer">10.1109/MIC.2019.2958545</a>
          </p>
          <p>{AbstractToggler}</p>
          {
            open && 
            <div>
              <b>Abstract:</b>
              <p>
                FABRIC is a unique national research infrastructure to enable cutting-edge and exploratory research at-scale in networking, cybersecurity, distributed computing and storage systems, machine learning, and science applications. It is an everywhere-programmable nationwide instrument comprised of novel extensible network elements equipped with large amounts of compute and storage, interconnected by high speed, dedicated optical links. It will connect a number of specialized testbeds for cloud research (NSF Cloud testbeds CloudLab and Chameleon), for research beyond 5G technologies (Platforms for Advanced Wireless Research or PAWR), as well as production high-performance computing facilities and science instruments to create a rich fabric for a wide variety of experimental activities.
              </p>
            </div>
          }
      </Paragraph>
  </AnimateOnMount>
  )
}

export default PublicationsPage
