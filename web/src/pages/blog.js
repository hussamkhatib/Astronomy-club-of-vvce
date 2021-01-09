import React from 'react'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import GraphQLErrorList from '../components/graphql-error-list'
import {graphql} from 'gatsby'
import {
    mapEdgesToNodes,
    filterOutDocsWithoutSlugs,
    filterOutDocsPublishedInTheFuture
  } from '../lib/helpers'
import Layout from '../containers/layout'
import Container from '../components/container'

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
      width
      height
    }
    asset {
      _id
    }
  }
query BlogPageQuery {
posts: allSanityPost(
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
}`

const BlogPage = props => {
    console.log({props})
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
     /*   if (!site) {
            throw new Error(
              'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
            )
          }*/
    return (
    <Layout>
        <div style={{ boxSizing: 'border-box',
  maxWidth: '960px',
  padding: '1.5em',
  margin: '0 auto'
}}>
          {postNodes && (
        <BlogPostPreviewList
          title='Latest blog posts'
          nodes={postNodes}
        />
        )}
        </div>
    </Layout>
    )
}

export default BlogPage
