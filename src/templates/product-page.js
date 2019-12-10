import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../components/Layout'
import IntroBlurbs from '../components/IntroBlurbs'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export function ProductPageTemplate({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) {
  const headerImageUrl = !!image.childImageSharp
    ? image.childImageSharp.fluid.src
    : image

  const fullImageImageUrl = fullImage.childImageSharp
    ? fullImage.childImageSharp.fluid.src
    : fullImage

  return (
    <Container fluid="sm">
      <header
        className="full-width-image-container mt-0"
        style={{
          backgroundImage: `url(${headerImageUrl})`,
          marginBottom: `5rem`,
        }}
      >
        <h1 className="heroTitle font-weight-bold">{title}</h1>
      </header>

      <section>
        <h3 className="h1">{heading}</h3>
        <p>{description}</p>
      </section>

      <IntroBlurbs introBlurbs={intro.blurbs} />

      <section>
        <h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
        <p>{main.description}</p>
      </section>

      <Row>
        <Col lg="6" className="mb-4">
          <PreviewCompatibleImage imageInfo={main.image1} />
        </Col>
        <Col lg="6" className="mb-4">
          <PreviewCompatibleImage imageInfo={main.image2} />
        </Col>
      </Row>
      <div className="mb-4">
        <PreviewCompatibleImage imageInfo={main.image3} />
      </div>

      <Testimonials testimonials={testimonials} />

      <div
        className="full-width-image-container"
        style={{
          backgroundImage: `url(${fullImageImageUrl})`,
        }}
      />

      <h2 className="h1">{pricing.heading}</h2>
      <p className="is-size-5">{pricing.description}</p>

      <Pricing data={pricing.plans} />
    </Container>
  )
}

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
