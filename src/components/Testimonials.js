import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Alert } from 'reactstrap'

function Testimonials({ testimonials }) {
  return (
    <>
      {testimonials.map(testimonial => (
        <Alert color="dark" key={v4()}>
          <blockquote className="message-body">
            {testimonial.quote}
            <br />
            <cite> – {testimonial.author}</cite>
          </blockquote>
        </Alert>
      ))}
    </>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
