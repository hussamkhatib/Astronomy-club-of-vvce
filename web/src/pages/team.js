import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'
import TeamMember from '../components/team-member'

//export const query = graphql`
 // query TeamPageQuery {
   
//`

  const teamPage = props => {
  const {data, errors} = props
//  const { title } = data.sanityTeam
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

 

  return (
    <Layout>
      {/* <SEO title={} /> */}

      <Container>
     <TeamMember 
      title='Team Members'
     />
       
      </Container>
    </Layout>
  )
}

export default teamPage
