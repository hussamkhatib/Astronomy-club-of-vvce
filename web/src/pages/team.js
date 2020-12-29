import React,{useState} from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {
  mapEdgesToNodes,
} from '../lib/helpers'
import TeamPreview from '../components/teampreview'

export const query = graphql`
{
  team: allSanityTeam{
    edges{
      node{
        name
        branch
        role
        slug{
          current
        }
        image{
          alt
          asset{
            _id
            url
          }
        }
      }
    }
  }
}
`

  const teamPage = props => {
  const {data, errors} = props
//  const {edges} = data.team 
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

 
  const teamNodes = data && data.team && mapEdgesToNodes(data.team)

  return (
    <Layout>
      {/* <SEO title={} /> */}

      
     <TeamPreview
          nodes={teamNodes} 
     />
 
    </Layout>
  )
}

export default teamPage
