import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface HistoryState {
  words: [
        {
          keys: [
            string | null,
            string | null,
            string | null,
            string | null,
            string | null,
          ]
          completed: boolean
        },
        {
          keys: [
            string | null,
            string | null,
            string | null,
            string | null,
            string | null,
          ]
          completed: boolean
        },
        {
          keys: [
            string | null,
            string | null,
            string | null,
            string | null,
            string | null,
          ]
          completed: boolean
        },
        {
          keys: [
            string | null,
            string | null,
            string | null,
            string | null,
            string | null,
          ]
          completed: boolean
        },
        {
          keys: [
            string | null,
            string | null,
            string | null,
            string | null,
            string | null,
          ]
          completed: boolean
        },
        {
          keys: [
            string | null,
            string | null,
            string | null,
            string | null,
            string | null,
          ]
          completed: boolean
        },
      ]
    | null
}

export interface SetWord {
  row: number
  col: number
  word: string
}

export interface Completed {
  row: number
}

const initialState: HistoryState = {
  words: [
    {
      keys: [null, null, null, null, null],
      completed: false,
    },
    {
      keys: [null, null, null, null, null],
      completed: false,
    },
    {
      keys: [null, null, null, null, null],
      completed: false,
    },
    {
      keys: [null, null, null, null, null],
      completed: false,
    },
    {
      keys: [null, null, null, null, null],
      completed: false,
    },
    {
      keys: [null, null, null, null, null],
      completed: false,
    },
  ],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<SetWord>) => {
      state.words![action.payload.row]['keys'][action.payload.col] = action.payload.word
    },

    completed: (state, action: PayloadAction<Completed>) => {
        state.words![action.payload.row]['completed'] = true
    }
  },
})

export const {} = historySlice.actions

export default historySlice.reducer
