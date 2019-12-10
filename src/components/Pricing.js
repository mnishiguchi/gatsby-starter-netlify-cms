import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardText, CardBody } from 'reactstrap'

function Pricing({ data }) {
  return (
    <Row>
      {data.map(({ plan, description, price, items }) => (
        <Col key={plan}>
          <Card className="border-0">
            <CardBody>
              <h4 className="h4 text-center">{plan}</h4>
              <CardText
                className="h1 text-center font-weight-bold"
                style={{ margin: '4rem 0 2rem 0', color: '#d64000' }}
              >
                ${price}
              </CardText>
              <CardText>{description}</CardText>
              <ul>
                {items.map(item => (
                  <li key={item} className="h5 font-weight-normal">
                    {item}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
