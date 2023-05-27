import React, { FC } from 'react'

import Accordion from 'react-bootstrap/Accordion'

import { TableScrolled } from '../table/tableScrolled'

export const AccordionComponent: FC = () => {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Выполненные задачи</Accordion.Header>
        <Accordion.Body>
          <TableScrolled filteredBy={'завершена'} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Задачи на сегодня</Accordion.Header>
        <Accordion.Body>
          <TableScrolled />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Предстоящие задачи</Accordion.Header>
        <Accordion.Body>
          <TableScrolled />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
