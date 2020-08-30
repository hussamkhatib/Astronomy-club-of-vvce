import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import img from '../components/icon/astro.svg'
import Contact from '../components/contact'
import TeamPreview from '../components/teampreview'

import styles from '../components/head.module.css'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }
  
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
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
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
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

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
    const teamNodes = data && data.team && mapEdgesToNodes(data.team)

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
  
    <Layout  >  

      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <h1 className={styles.h1}> {site.title}</h1> 
        <h3 className={styles.h3}>{site.description}</h3>
        <img src={img} className={styles.abc} />
        <p className={styles.p}>
        To Honour the contributions of the Missile Man of India, The Dr. APJ Abdul Kalam Memorial Astronomical club of VVCE was formed in the year 2018. Our vision is to create interest among the engineering students about space , astronomy and make them understand the importance of engineering in the field of research and technology.
        </p>
        {postNodes && (
          <BlogPostPreviewList
            title='Latest blog posts'
            nodes={postNodes}
            browseMoreHref='/archive/'
          />
        )}
      
      </Container>
      {
        teamNodes && (
          <TeamPreview 
          nodes = {teamNodes}
          />
        )
      }
      <Contact />
    </Layout>
  )
}

export default IndexPage
