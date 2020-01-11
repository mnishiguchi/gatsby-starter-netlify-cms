import React from 'react'
import { Link } from 'gatsby'
import { Collapse, Navbar, Nav } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import logo from '../img/logo.svg'
import css from './AppHeader.module.scss'

function AppHeader() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="light" light expand="md">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
      </Link>

      <button className={css.hamburger} onClick={toggle}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default AppHeader
