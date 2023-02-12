import { configureStore } from '@reduxjs/toolkit'
import user from '@/store/reducer/user'

export const store = configureStore({
  reducer: {
    user,
  },
})