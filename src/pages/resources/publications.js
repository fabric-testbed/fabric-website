import React from 'react'
import { Module } from '../../components/layout'
import { SEO } from '../../components/seo'
import { Title } from '../../components/typography'
import { usePublications } from '../../hooks'
import { Publication } from '../../components/modules/publication'

const PublicationsPage = () => {
  const publications = usePublications()

  return (
    <Module>
      <SEO title="Publications" />
      <Title>Publications</Title>
      <Module title="">
        {
          publications.map((publication, i) => (
            <Publication
              key={ `publication-${i}` }
              index={ i }
              data={publication}
            />
          ))
        }
      </Module>
    </Module>
  )
}

export default PublicationsPage
