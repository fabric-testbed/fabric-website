import React, { useMemo, useState } from 'react'
import { Module } from '../layout'
import styled from 'styled-components'

const Toggler = styled.button.attrs({ role: 'button' })`
  width: 9rem;
  height: 2rem;
  font-weight: 600;
  background-color: transparent;
  border: 2px var(--color-primary) solid;
  border-radius: 5px;
  cursor: pointer;
  color: var(--color-primary);
  transition: color 250ms;
  &:hover {
    color: var(--color-primary-dark);
  }
`

export const Publication = props => {
  const { title, authors, link, doi, doilink, abstract } = props.data;

  const [open, setOpen] = useState(false)

  const handleToggleAbstracts = () => setOpen(!open)

  const AbstractToggler = useMemo(() => {
    return (
      <Toggler onClick={ handleToggleAbstracts } style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5rem 1rem' }}>
        <em>{ open ? 'Hide' : 'View' } Abstract</em>
      </Toggler>
    )
  }, [open])

  return (
    <Module title="">
      <h3>
        <a href={ link } target="_blank" rel="noreferrer">{ title }</a>
      </h3>
      <p>
        { authors }
        <br></br>
        DOI: <a href={ doilink } target="_blank" rel="noreferrer">{ doi }</a>
      </p>
      <p>{AbstractToggler}</p>
      {
        open && 
        <div>
          <b>Abstract:</b>
          <p>{ abstract }</p>
        </div>
      }
    </Module>
  )
}

