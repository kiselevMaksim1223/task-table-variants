import React from 'react'

import { Badge, Card, Col, Container, Row } from 'react-bootstrap'

import { AccordionComponent } from '../features/accordion/accordion'
import { Header } from '../features/header/header'

export const App = () => {
  return (
    <Container fluid={'xxl'}>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col sm={1}>
          <div className="h-100 bg-light ">
            <Badge pill bg="info" className="mx-3 my-5">
              Info
            </Badge>{' '}
          </div>
        </Col>
        <Col sm={11}>
          <AccordionComponent />
        </Col>
      </Row>
    </Container>
  )
}
