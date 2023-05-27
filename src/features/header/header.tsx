import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import s from './header.module.scss'

export const Header = () => {
  return (
    <Navbar bg="light" variant="light" className={'w-100 mb-3 d-flex'}>
      <Link to={'/'} className={'text-decoration-none text-black me-4'}>
        <h2>Проект</h2>
      </Link>
      <Nav className="me-auto flex-row gap-3">
        <Link to="/scrolled" className={'text-decoration-none text-black'}>
          Scrolled Table
        </Link>
        <Link to="/responsive" className={'text-decoration-none text-black'}>
          Responsive Table
        </Link>
      </Nav>
      <div className={s.info}>
        <div className={s.ava} />
        <div className={s.desc}>
          <h6>Киселев М.А.</h6>
          <p>Разработчик</p>
        </div>
      </div>
    </Navbar>
  )
}
