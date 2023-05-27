import React, { FC } from 'react'

import { Table } from 'react-bootstrap'

import { useAppSelector } from '../../app/store/store'
import { DropDown } from '../dropDown/dropDown'

import s from './tableScrolled.module.scss'

export const TableScrolled: FC<{ filteredBy?: string }> = ({ filteredBy }) => {
  const data = useAppSelector(state => state.app)
  const filteredData = data.filter(t =>
    filteredBy ? t.status === filteredBy : t.status !== 'выполнена'
  )

  return (
    <div>
      <Table responsive className={s.table} hover>
        <thead className="bg-info bg-opacity-10">
          <tr>
            <th>Дата</th>
            <th>Шифр задачи</th>
            <th>Шифр проекта</th>
            <th>Задача</th>
            <th>Статус</th>
            <th>Ответственный</th>
            <th>Переназначить</th>
            <th>Приоретет</th>
            <th>Комментарий</th>
            <th>План время</th>
            <th>Факт время</th>
            <th>Начал</th>
            <th>Закончил</th>
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
