import React, { FC } from 'react'

import { Table } from 'react-bootstrap'

import { dataType } from '../../app/data/data.type'
import { useAppSelector } from '../../app/store/store'
import { DropDown } from '../dropDown/dropDown'

import s from './tableScrolled.module.scss'

export const TableScrolled: FC<{ filteredBy?: string }> = ({ filteredBy }) => {
  const data = useAppSelector(state => state.app)
  const filteredData = data.filter(t =>
    filteredBy ? t.status === filteredBy : t.status !== 'завершена'
  )

  return (
    <div>
      <Table responsive="xl" className={s.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Task Code</th>
            <th>Project Code</th>
            <th>Task</th>
            <th>Status</th>
            <th>Responsible</th>
            <th>Reassign</th>
            <th>Priority</th>
            <th>Comment</th>
            <th>Planned Time</th>
            <th>Actual Time</th>
            <th>Started</th>
            <th>Finished</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(el => {
            return (
              <tr key={el.id}>
                <td>{el.date}</td>
                <td>{el.taskCode}</td>
                <td>{el.projectCode}</td>
                <td>{el.task}</td>
                <td data-label="Статус">
                  <DropDown id={el.id} />
                </td>
                <td>{el.responsible}</td>
                <td>{el.reassign}</td>
                <td>{el.priority}</td>
                <td>{el.comment}</td>
                <td>{el.plannedTime}</td>
                <td>{el.actualTime}</td>
                <td>{el.started}</td>
                <td>{el.finished}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
