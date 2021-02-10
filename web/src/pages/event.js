import { graphql } from 'gatsby'
import React from 'react'
import GraphQLErrorList from '../components/graphql-error-list'
import { mapEdgesToNodes } from '../lib/helpers'
import Layout from '../containers/layout'
import EventPreview from '../components/eventPreview'

export const query = graphql`
{
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

const Event = props => {
    const {data,errors} = props

    if (errors) {
        return (
          <Layout>
            <GraphQLErrorList errors={errors} />
          </Layout>
        )
      }
      const eventNodes = data && data.event && mapEdgesToNodes(data.event)
    return (
        <Layout>
            <EventPreview 
                nodes={eventNodes}
            />     
        </Layout>
    )
}

export default Event
