import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { Row, Col } from 'reactstrap'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import css from './BlogRoll.module.scss'

function BlogRoll({
  data: {
    allMarkdownRemark: { edges },
  },
  className = '',
}) {
  return (
    <div className={className}>
      {edges &&
        edges.map(({ node: { id, frontmatter, fields, excerpt } }) => (
          <Row
            key={id}
            className={`${css.listItem}`}
          >
            {frontmatter.featuredimage ? (
              <Col sm="12" md="3" className={css.thumbnail}>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${frontmatter.title}`,
                  }}
                />
              </Col>
            ) : null}

            <Col sm="12" md="9">
              <h4 className="mb-3">
                <Link to={fields.slug}>{frontmatter.title}</Link>
                <br />
                <small className="text-muted h6">{frontmatter.date}</small>
              </h4>

              <p>{excerpt}</p>

              <Link to={fields.slug}>Keep Reading →</Link>
            </Col>
          </Row>
        ))}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
