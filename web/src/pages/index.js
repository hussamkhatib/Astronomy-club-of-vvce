import React from 'react'
import {graphql} from 'gatsby'
import  { useState, useEffect } from 'react'
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
import  Head from '../components/head'
import Latest from '../components/latest'

import styles from '../components/head.module.css'
import Tweet from '../components/tweet'


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
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot{
               _key
        _type
        x
        y
        height
        width
            }
          }
        }
      }
    }
    posts: allSanityPost(
      limit: 2
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
/**
 * blog 
 */
  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []
 

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

 /**
  * team
  */
    
 const teamNodes = data && data.team && mapEdgesToNodes(data.team)
  const [currentPage, setCurrentPage] = useState(1);
 const [currentImage,setCurrentImage] = useState(0)

  const [postsPerPage] = useState(8);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = teamNodes.slice(indexOfFirstPost, indexOfLastPost);
  //
  const indexImage = currentImage
  const bigImage = currentPosts.slice(indexImage,indexImage+1)
  // Change page

  const paginate = pageNumber => {
    setCurrentImage(0)
    setCurrentPage(pageNumber)
  };  
  const switchImage = image =>  setCurrentImage(image);
  return (
  
    <Layout  >  

      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <Head
        subtitle={site.description} />
        <Latest />
        <Tweet />
          </Container>
    </Layout>
  )
}

export default IndexPage
