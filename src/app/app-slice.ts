import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { data } from './data/data'
import { StatusType } from './data/data.type'

export const appSlice = createSlice({
  name: 'app',
  initialState: data,
  reducers: {
    changeStatus: (state, action: PayloadAction<{ value: StatusType; id: string }>) => {
      const item = state.find(i => i.id === action.payload.id)

      if (item) {
        item.status = action.payload.value
      }
    },
  },
})

export const appReducer = appSlice.reducer
export const { changeStatus } = appSlice.actions
