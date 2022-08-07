import { configureStore } from "@reduxjs/toolkit"
import { guessSlice } from "./slice"

export default configureStore({
  reducer: {
    guess: guessSlice.reducer
  }
})