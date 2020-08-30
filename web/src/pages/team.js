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

      
     <TeamMember />
{/*   
     <div className={styles.parent}>
      {edges.map(team =>(
        <div key={team.node.slug.current}>
          
           <img className={styles.image} 
           src = {imageUrlFor(buildImageObj(team.node.image))
           .height(140)
           .width(140)
           .fit('crop')
           .url()} />
           <h5 className={styles.h5}> {team.node.name} </h5>
           <h6 className={styles.h6}> {team.node.role} </h6>
    
        </div>
      ))}
       </div> */}
       
 
    </Layout>
  )
}

export default teamPage
