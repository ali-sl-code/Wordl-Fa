import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface HistoryState {
  words: [
        {
          keys: [
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
          ]
          completed: boolean
        },
        {
          keys: [
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
          ]
          completed: boolean
        },
        {
          keys: [
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
          ]
          completed: boolean
        },
        {
          keys: [
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
          ]
          completed: boolean
        },
        {
          keys: [
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
          ]
          completed: boolean
        },
        {
          keys: [
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
            {
              key: string | null,
              validate: "correct" | "present" | "absent" | null
            },
          ]
          completed: boolean
        },
      ]
    | null
}

export interface SetKey {
  row: number
  col: number
  key: string
}

export interface Completed {
  row: number
}

const initialState: HistoryState = {
  words: [
    {
      keys: [
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
      ],
      completed: false,
    },
    {
      keys: [
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
      ],
      completed: false,
    },
    {
      keys: [
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
      ],
      completed: false,
    },
    {
      keys: [
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
      ],
      completed: false,
    },
    {
      keys: [
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
      ],
      completed: false,
    },
    {
      keys: [
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
        {
          key: null,
          validate: null,
        },
      ],
      completed: false,
    },
  ],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setKey: (state, action: PayloadAction<SetKey>) => { //action.payload.word
      state.words![action.payload.row].keys[action.payload.col].key = action.payload.key
    }
  },
})

export const { setKey } = historySlice.actions

export default historySlice.reducer
