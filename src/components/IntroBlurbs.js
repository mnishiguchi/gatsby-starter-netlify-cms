import React from 'react'
import { Row, Col, Card, CardText, CardBody } from 'reactstrap'
import PreviewCompatibleImage from './PreviewCompatibleImage'

function IntroBlurbs({ introBlurbs, className = '' }) {
  return (
    <Row className={className}>
      {introBlurbs.map(blurb => (
        <Col lg="6" key={blurb.text}>
          <Card className="mb-4 border-0">
            <div
              style={{
                width: '240px',
              }}
            >
              <PreviewCompatibleImage imageInfo={blurb} />
            </div>
            <CardBody>
              <CardText>{blurb.text}</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
export default IntroBlurbs
