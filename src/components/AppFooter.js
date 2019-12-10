import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col, Nav, NavItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faVimeo,
} from '@fortawesome/free-brands-svg-icons'

import logo from '../img/logo.svg'
import css from './AppFooter.module.scss'

function AppFooter() {
  return (
    <footer className={css.footer}>
      <div className="d-flex justify-content-center mb-4">
        <img src={logo} alt="Kaldi" className={css.logo} />
      </div>

      <Container>
        <Row>
          <Col sm="6" lg="4">
            <Nav vertical>
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact/examples">
                  Form Examples
                </Link>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link"
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admin
                </a>
              </NavItem>
            </Nav>
          </Col>
          <Col sm="6" lg="4">
            <Nav vertical>
              <NavItem>
                <Link className="nav-link" to="/blog">
                  Latest Stories
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Col>
          <Col lg="4" className={css.social}>
            <a title="facebook" href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a title="twitter" href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a title="instagram" href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a title="vimeo" href="https://vimeo.com">
              <FontAwesomeIcon icon={faVimeo} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default AppFooter
