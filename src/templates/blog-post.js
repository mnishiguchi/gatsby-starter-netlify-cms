import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export function BlogPostTemplate({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) {
  const PostContent = contentComponent || Content

  return (
    <Container fluid="sm" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
      {helmet || ''}

      <h1>{title}</h1>
      <p>{description}</p>

      <PostContent content={content} />
    </Container>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

function BlogPost({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
