import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

// The content is provided from a markdown file.
export function AboutPageTemplate({ title, content, contentComponent }) {
  const PageContent = contentComponent || Content

  return (
    <Container fluid="sm" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
      <h1>{title}</h1>
      <PageContent className="content" content={content} />
    </Container>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
