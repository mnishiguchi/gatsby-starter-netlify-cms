import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Container } from 'reactstrap'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import IntroBlurbs from '../components/IntroBlurbs'

import css from './index-page.module.scss'

export function IndexPageTemplate({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) {
  const heroBackgroundImageUrl = !!image.childImageSharp
    ? image.childImageSharp.fluid.src
    : image

  return (
    <>
      <header
        className={`full-width-image ${css.hero}`}
        style={{
          backgroundImage: `url(${heroBackgroundImageUrl})`,
          marginBottom: `5rem`,
        }}
      >
        <div className={css.heroTitleBox}>
          <h1 className={css.heroTitle}>{title}</h1>
          <h2 className={css.heroSubheading}>{subheading}</h2>
        </div>
      </header>

      <Container fluid="sm">
        <section className={css.bodySection}>
          <h2 className="">{mainpitch.title}</h2>
          <p className="lead">{mainpitch.description}</p>
        </section>

        <section className={css.bodySection}>
          <h1 className="display-4 mb-3">{heading}</h1>
          <p>{description}</p>
        </section>

        <section className={css.bodySection}>
          <IntroBlurbs introBlurbs={intro.blurbs} />
          <Link className="btn btn-outline-primary" to="/products">
            See all products
          </Link>
        </section>

        <section className={css.bodySection}>
          <h2>Latest stories</h2>
          <BlogRoll />
          <Link className="btn btn-outline-primary" to="/blog">
            Read more
          </Link>
        </section>
      </Container>
    </>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

function IndexPage({ data }) {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        subheading
        mainpitch {
          title
          description
        }
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
      }
    }
  }
`
