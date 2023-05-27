import React, { FC } from 'react'

import Accordion from 'react-bootstrap/Accordion'

import { TableResponsive } from '../table/tableResponsive'

export const AccordionComponentResponsive: FC = () => {
  return (
    <>
      <h3 className="mb-4">Задачи</h3>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Выполненные задачи</Accordion.Header>
          <Accordion.Body>
            <TableResponsive filteredBy={'выполнена'} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Задачи на сегодня</Accordion.Header>
          <Accordion.Body>
            <TableResponsive />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Предстоящие задачи</Accordion.Header>
          <Accordion.Body>
            <TableResponsive />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}
