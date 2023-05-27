import React, { FC } from 'react'

import { useAppSelector } from '../../app/store/store'
import { DropDown } from '../dropDown/dropDown'

import s from './tableResponsive.module.scss'

export const TableResponsive: FC = () => {
  const data = useAppSelector(state => state.app)[0]

  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          <tr>
            <th className="text-center align-items-center">Дата</th>
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
          <tr>
            <td data-label="Дата">{data.date}</td>
            <td data-label="Шифр задачи">{data.taskCode}</td>
            <td data-label="Шифр проекта">{data.projectCode}</td>
            <td data-label="Задача">{data.task}</td>
            <td data-label="Статус">
              <DropDown id={data.id} />
            </td>
            <td data-label="Ответственный">{data.responsible}</td>
            <td data-label="Переназначить">{data.reassign}</td>
            <td data-label="Приоретет">{data.priority}</td>
            <td data-label="Комментарий">{data.comment}</td>
            <td data-label="План время">{data.plannedTime}</td>
            <td data-label="Факт время">{data.actualTime}</td>
            <td data-label="Начал">{data.started}</td>
            <td data-label="Закончил">{data.finished}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
