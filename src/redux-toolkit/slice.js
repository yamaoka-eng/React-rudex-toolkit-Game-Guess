import { createSlice } from "@reduxjs/toolkit"

export const guessSlice = createSlice({
  name: 'guess',
  initialState: {
    number: Math.round(Math.random()*20),
    score: 10,
    highScore: 0,
    success: null
  },
  reducers: {
    agin: state => {
      state.number = Math.round(Math.random()*20)
      state.success = null
      state.score = 10
    },
    guess: (state, { payload }) => {
      if (state.number == payload.number) {
        state.success = true
        if (state.score > state.highScore) state.highScore = state.score
      } else {
        state.success = false
        state.score -= 1
        if (state.score < 0)  state.score = 0
      }
    }
  }
})

export const { agin, guess } = guessSlice.actions
