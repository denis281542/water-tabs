import { createSlice } from '@reduxjs/toolkit'

export const anchorSlice = createSlice({
    name: 'anchor',
    initialState: {
      clickCounter: null
    },
    reducers: {
      scrollToForm: state => {
        state.clickCounter += 1
      }
    }
  })
  
  export const { scrollToForm} = anchorSlice.actions

  export default anchorSlice.reducer

