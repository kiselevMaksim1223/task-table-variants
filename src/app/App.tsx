import React from 'react'

import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'

import { AccordionComponentResponsive } from '../features/accordion/accordionResponsive'
import { AccordionComponentScrolled } from '../features/accordion/accordionScrolled'
import { Header } from '../features/header/header'
import { HomePage } from '../features/homePage/homePage'

export const App = () => {
  return (
    <div className={'container'}>
      <Header />

      <div>
        <Container fluid={'xxl'}>
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/scrolled'} element={<AccordionComponentScrolled />} />
            <Route path={'/responsive'} element={<AccordionComponentResponsive />} />
          </Routes>
        </Container>
      </div>
    </div>
  )
}
