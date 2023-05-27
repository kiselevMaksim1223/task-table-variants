import React, { FC } from 'react'

import { useAppSelector } from '../../app/store/store'
import { DropDown } from '../dropDown/dropDown'

import s from './tableResponsive.module.scss'

export const TableResponsive: FC<{ filteredBy?: string }> = ({ filteredBy }) => {
  const data = useAppSelector(state => state.app)
  const filteredData = data.filter(t =>
    filteredBy ? t.status === filteredBy : t.status !== 'выполнена'
  )

  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead className={s.thead}>
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
          {filteredData.map(t => {
            return (
              <tr key={t.id}>
                <td data-label="Дата">
                  <span>{t.date}</span>
                </td>
                <td data-label="Шифр задачи">
                  <span>{t.taskCode}</span>
                </td>
                <td data-label="Шифр проекта">
                  <span>{t.projectCode}</span>
                </td>
                <td data-label="Задача">
                  <span>{t.task}</span>
                </td>
                <td data-label="Статус">
                  <span>
                    <DropDown id={t.id} />
                  </span>
                </td>
                <td data-label="Ответственный">
                  <span>{t.responsible}</span>
                </td>
                <td data-label="Переназначить">
                  <span>{t.reassign}</span>
                </td>
                <td data-label="Приоретет">
                  <span>{t.priority}</span>
                </td>
                <td data-label="Комментарий">
                  <span>{t.comment}</span>
                </td>
                <td data-label="План время">
                  <span>{t.plannedTime}</span>
                </td>
                <td data-label="Факт время">
                  <span>{t.actualTime}</span>
                </td>
                <td data-label="Начал">
                  <span>{t.started}</span>
                </td>
                <td data-label="Закончил">
                  <span>{t.finished}</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
