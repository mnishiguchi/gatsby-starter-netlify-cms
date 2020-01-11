import React from 'react'
import { Container } from 'reactstrap'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export default function BlogIndexPage() {
  return (
    <Layout>
      <header
        className="full-width-image-container mt-0"
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`,
        }}
      >
        <h1 className="heroTitle font-weight-bold">Latest Stories</h1>
      </header>

      <Container fluid="sm">
        <BlogRoll />
      </Container>
    </Layout>
  )
}
