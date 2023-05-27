export type dataType = {
  id: string
  date: string
  taskCode: number
  projectCode: number
  task: string
  status: StatusType
  responsible: string
  reassign: string
  priority: number
  comment: string
  plannedTime: string
  actualTime: string
  started: string
  finished: string
}

export type StatusType = 'на паузе' | 'выполнена' | 'в работе'
