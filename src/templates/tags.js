import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { Container } from 'reactstrap'

import Layout from '../components/Layout'

function TagRoute({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2>{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ))
  const tag = pageContext.tag
  const title = data.site.siteMetadata.title
  const totalCount = data.allMarkdownRemark.totalCount
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`

  return (
    <Layout>
      <Helmet title={`${tag} | ${title}`} />
      <Container style={{ marginTop: '2rem', marginBottom: '5rem' }}>
        <h3>{tagHeader}</h3>
        <ul className="taglist">{postLinks}</ul>
        <p>
          <Link to="/tags/">Browse all tags</Link>
        </p>
      </Container>
    </Layout>
  )
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
