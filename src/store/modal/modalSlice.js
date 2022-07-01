import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
      isOpen: false
    },
    reducers: {
      isOpenModal: (state, action) => {
        state.isOpen = action.payload
        if(action.payload) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'visible'
        }
      }
    }
  })
  
  export const { isOpenModal} = modalSlice.actions

  export default modalSlice.reducer

