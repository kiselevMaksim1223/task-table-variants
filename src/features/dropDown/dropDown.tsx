import React, { FC } from 'react'

import { Dropdown, DropdownButton } from 'react-bootstrap'

import { changeStatus } from '../../app/app-slice'
import { dataType, StatusType } from '../../app/data/data.type'
import { useAppDispatch, useAppSelector } from '../../app/store/store'

export const DropDown: FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch()
  const task = useAppSelector(state => state.app.find(el => el.id === id))

  const dropDownVariant = (task: dataType) => {
    if (task && task.status === 'выполнена') {
      return 'success'
    } else if (task && task.status === 'в работе') {
      return 'info'
    } else {
      return 'secondary'
    }
  }

  const onClickHandler = (value: StatusType) => {
    dispatch(changeStatus({ value, id }))
  }

  return (
    <DropdownButton
      id="dropdown-variant-secondary"
      title={task && task.status}
      variant={dropDownVariant(task as dataType)}
    >
      <Dropdown.Item onClick={() => onClickHandler('на паузе')}>на паузе</Dropdown.Item>
      <Dropdown.Item onClick={() => onClickHandler('выполнена')}>завершена</Dropdown.Item>
      <Dropdown.Item onClick={() => onClickHandler('в работе')}>в работе</Dropdown.Item>
    </DropdownButton>
  )
}
