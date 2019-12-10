import React from 'react'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
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
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/contact/examples">
            Form Examples
          </Link>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <a
                className="dropdown-item"
                href="https://github.com/mnishiguchi/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
              <a
                className="dropdown-item"
                href="https://mnishiguchi-gatsby-netlify-cms.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Icon can mess up default navbar styles when it is large */}
        <a
          className="navbar-text"
          href="https://github.com/mnishiguchi/gatsby-starter-netlify-cms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Collapse>
    </Navbar>
  )
}

export default AppHeader
