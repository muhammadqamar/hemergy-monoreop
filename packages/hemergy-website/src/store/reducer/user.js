import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const userReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userReducer.actions

export default userReducer.reducer