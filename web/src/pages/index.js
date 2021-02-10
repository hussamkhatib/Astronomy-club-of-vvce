import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import  Head from '../components/head'
import Latest from '../components/latest'

import Tweet from '../components/tweet'
import EventPreview from '../components/eventPreview'


export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    event: allSanityEvent {
      edges {
        node {
          title
          eventDate
          description
        }
      }
    }
  }

`

const IndexPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const eventNodes = data && data.event && mapEdgesToNodes(data.event)

  const site = (data || {}).site 

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
  
    <Layout>  

      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <Head
        subtitle={site.description} />
        <EventPreview
          nodes={eventNodes}
        />
         <Latest /> 
        <Tweet /> 
      </Container>
    </Layout>
  )
}

export default IndexPage
