import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import {responsiveTitle1} from '../components/typography.module.css'
import TeamMember from '../components/team-member'
import styles from '../components/team.module.css'

export const query = graphql`
{
  allSanityTeam{
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
  const {edges} = data.allSanityTeam 
  //const { name,branch } = data.sanityTeam
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
     <div className={styles.parent}>
      {edges.map(team =>(
        <div >
          
           <img src = {imageUrlFor(buildImageObj(team.node.image))
           .height(100)
           .width(100)
           .fit('crop')
           .url()} />
           <p> {team.node.name} </p>
           <p> {team.node.role} </p>
    
        </div>
      ))}
       </div>
       
       
       
       {/* <p> {node.name}    </p> */}
       {/* <p> {node.branch}  </p> */}
        {/* <img src ={data.sanityTeam.edges.node.image.asset.url} /> */}
      </Container>
    </Layout>
  )
}

export default teamPage
