import React from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Navbar bg="light" variant="light" className={'mb-3'}>
      <Container fluid={'xxl'}>
        <Link to={'/'} className={'text-decoration-none text-black me-4'}>
          <h3>Задачи</h3>
        </Link>
        <Nav className="me-auto flex-row gap-3">
          <Link to="/scrolled" className={'text-decoration-none text-black'}>
            Scrolled Table
          </Link>
          <Link to="/responsive" className={'text-decoration-none text-black'}>
            Responsive Table
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
